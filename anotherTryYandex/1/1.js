// Функция interpretNavConfig (та же, что выше)
function splitPath(path) {
    return path.split('/').filter(s => s.length > 0);
}

function parsePattern(patternStr) {
    const parts = [];
    const regex = /([^\[\]]+)|\[([^\]]+)\]/g;
    let match;

    while ((match = regex.exec(patternStr)) !== null) {
        if (match[1] !== undefined) {
            if (match[1].length > 0) {
                parts.push({ type: 'fixed', value: match[1] });
            }
        } else if (match[2] !== undefined) {
            let raw = match[2];
            let optional = false;
            let ignoreCase = false;

            if (raw.endsWith('~')) {
                ignoreCase = true;
                raw = raw.slice(0, -1);
            }
            if (raw.endsWith('?')) {
                optional = true;
                raw = raw.slice(0, -1);
            }

            const name = raw;
            if (!/^[A-Za-z0-9_-]+$/.test(name)) {
                return null;
            }

            parts.push({ type: 'param', name, optional, ignoreCase });
        }
    }
    return parts;
}

function matchPattern(patternStr, pathSegments) {
    const parts = parsePattern(patternStr);
    if (!parts) return null;

    let segIdx = 0;
    const params = {};

    for (let partIdx = 0; partIdx < parts.length; partIdx++) {
        const part = parts[partIdx];

        if (part.type === 'fixed') {
            if (segIdx >= pathSegments.length) return null;
            if (pathSegments[segIdx] !== part.value) return null;
            segIdx++;
        } else {
            if (part.optional) {
                if (segIdx < pathSegments.length && /^[A-Za-z0-9_-]+$/.test(pathSegments[segIdx])) {
                    const val = pathSegments[segIdx];
                    params[part.name] = part.ignoreCase ? val.toLowerCase() : val;
                    segIdx++;
                }
            } else {
                if (segIdx >= pathSegments.length) return null;
                const val = pathSegments[segIdx];
                if (!/^[A-Za-z0-9_-]+$/.test(val)) return null;
                params[part.name] = part.ignoreCase ? val.toLowerCase() : val;
                segIdx++;
            }
        }
    }

    return segIdx === pathSegments.length ? params : null;
}

function substitute(template, params) {
    return template.replace(/\{(\w+)\}/g, (_, name) => {
        return params[name] !== undefined ? params[name] : '';
    });
}

async function interpretNavConfig(config, inputPath) {
    const { pathRules, errorPath } = config;
    if (!pathRules || !errorPath) {
        throw new Error('config.pathRules and config.errorPath are required');
    }

    let currentPath = inputPath;
    const MAX_ITERATIONS = 20;
    let iteration = 0;
    let skipProcessors = false;

    while (iteration < MAX_ITERATIONS) {
        iteration++;

        const segments = splitPath(currentPath);

        let matchedRule = null;
        let matchedParams = null;

        for (const rule of pathRules) {
            const params = matchPattern(rule.pattern, segments);
            if (params) {
                matchedRule = rule;
                matchedParams = params;
                break;
            }
        }

        if (!matchedRule) {
            return errorPath;
        }

        if (matchedRule.redirect) {
            const redirectPath = substitute(matchedRule.redirect, matchedParams);
            currentPath = redirectPath;
            continue;
        }

        if (matchedRule.processors && !skipProcessors) {
            for (const proc of matchedRule.processors) {
                if (typeof proc === 'function') {
                    const result = await proc(matchedParams, currentPath);
                    if (typeof result === 'string') {
                        currentPath = result;
                        skipProcessors = true;
                        break;
                    }
                }
            }
            if (skipProcessors) {
                continue;
            }
        }

        if (matchedRule.destination) {
            return substitute(matchedRule.destination, matchedParams);
        }

        return errorPath;
    }

    return errorPath;
}

module.exports = interpretNavConfig;