module.exports = async function interpretNavConfig(config, inputPath) {
    const MAX_ITERATIONS = 100;
    let currentPath = inputPath;
    
    for (let iter = 0; iter < MAX_ITERATIONS; iter++) {
        // Разбиваем путь на сегменты
        const pathSegments = currentPath.split('/').filter(s => s !== '');
        
        let matched = false;
        
        // Перебираем правила по порядку
        for (const rule of config.pathRules) {
            // Разбираем pattern на токены
            const tokens = parsePattern(rule.pattern);
            
            // Пробуем сопоставить
            const matchResult = matchPattern(tokens, pathSegments);
            
            if (matchResult.matched) {
                matched = true;
                const params = matchResult.params;
                
                // Если есть redirect — выполняем его и начинаем цикл заново
                if (rule.redirect) {
                    currentPath = substituteParams(rule.redirect, params);
                    break; // выходим из цикла правил, идём на следующую итерацию
                }
                
                // Если есть processors — выполняем их
                if (rule.processors && rule.processors.length > 0) {
                    let processorResult = null;
                    for (const processor of rule.processors) {
                        try {
                            processorResult = await processor(params, currentPath);
                            if (typeof processorResult === 'string') {
                                currentPath = processorResult;
                                break; // выходим из цикла процессоров
                            }
                        } catch (e) {
                            return config.errorPath;
                        }
                    }
                    if (typeof processorResult === 'string') {
                        break; // выходим из цикла правил, идём на следующую итерацию
                    }
                }
                
                // Если есть destination — возвращаем
                if (rule.destination) {
                    return substituteParams(rule.destination, params);
                }
            }
        }
        
        if (!matched) {
            return config.errorPath;
        }
    }
    
    return config.errorPath; // превышен лимит итераций
};

// Парсит pattern в массив токенов
// Пример: "a[b?][c~]" → ["a", "[b?]", "[c~]"]
function parsePattern(pattern) {
    const tokens = [];
    let i = 0;
    
    while (i < pattern.length) {
        if (pattern[i] === '[') {
            const closeIndex = pattern.indexOf(']', i);
            if (closeIndex === -1) throw new Error('Invalid pattern');
            tokens.push(pattern.slice(i, closeIndex + 1));
            i = closeIndex + 1;
        } else {
            let j = i;
            while (j < pattern.length && pattern[j] !== '[') {
                j++;
            }
            tokens.push(pattern.slice(i, j));
            i = j;
        }
    }
    
    return tokens;
}

// Сопоставляет токены шаблона с сегментами пути
function matchPattern(tokens, pathSegments) {
    const params = {};
    let pathIdx = 0;
    
    for (let tokenIdx = 0; tokenIdx < tokens.length; tokenIdx++) {
        const token = tokens[tokenIdx];
        
        // Обычный текст (не параметр)
        if (!token.startsWith('[')) {
            if (pathIdx >= pathSegments.length) {
                return { matched: false };
            }
            if (pathSegments[pathIdx] !== token) {
                return { matched: false };
            }
            pathIdx++;
            continue;
        }
        
        // Параметр: [name], [name?], [name~]
        const paramMatch = token.match(/^\[([a-zA-Z0-9_-]+)(\?|~)?\]$/);
        if (!paramMatch) {
            return { matched: false };
        }
        
        const paramName = paramMatch[1];
        const modifier = paramMatch[2];
        
        if (modifier === '?') {
            // Опциональный: может быть, может не быть
            if (pathIdx < pathSegments.length) {
                params[paramName] = pathSegments[pathIdx];
                pathIdx++;
            }
            // Если нет сегмента — просто пропускаем
        } else if (modifier === '~') {
            // Игнорируемый: значение не сохраняем
            if (pathIdx >= pathSegments.length) {
                return { matched: false };
            }
            pathIdx++;
        } else {
            // Обычный параметр
            if (pathIdx >= pathSegments.length) {
                return { matched: false };
            }
            params[paramName] = pathSegments[pathIdx];
            pathIdx++;
        }
    }
    
    // Должны использовать все сегменты пути
    if (pathIdx !== pathSegments.length) {
        return { matched: false };
    }
    
    return { matched: true, params };
}

// Подставляет {param} в строку
function substituteParams(str, params) {
    return str.replace(/\{([a-zA-Z0-9_-]+)\}/g, (match, paramName) => {
        return params[paramName] !== undefined ? params[paramName] : match;
    });
}