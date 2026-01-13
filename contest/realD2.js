function solution(root) {
    let ans = {}
    function dfs(curDir, prev) {

        for (const key in curDir) {
            // if (!Object.hasOwn(curNode, key)) continue;

            const childDir = curDir[key];
            if (typeof childDir === 'function') {
                let finPath = [...prev, key]
                let strPrev = finPath.join('.')
                ans[strPrev] = (...args) => childDir(strPrev, ...args);

            }
            else {
                dfs(childDir, [...prev, key])
            }

        }

        // if (typeof curNode === 'function') {
        //     let strPrev = prev.join('.')
        //     ans[strPrev] = curNode
        // }
    }

    dfs(root, [])
    return ans
}
module.exports = solution;

// module.exports = solution;

// Объявляем все функции заранее
function someFunc1() {
    console.log('Функция 1: submit');
    // Логика для submit
}

function someFunc2() {
    console.log('Функция 2: click more');
    // Логика для click more
}

function someFunc3() {
    console.log('Функция 3: expand about');
    // Логика для expand about
}

function someFunc4() {
    console.log('Функция 4: click articles');
    // Логика для click articles
}

function someFunc5() {
    console.log('Функция 5: show footer');
    // Логика для show footer
}

function someFunc6() {
    console.log('Функция 6: logo');
    // Логика для logo
}

function someFunc7() {
    console.log('Функция 7: login');
    // Логика для login
}

function someFunc8() {
    console.log('Функция 8: logout');
    // Логика для logout
}

function someFunc9() {
    console.log('Функция 9: show page');
    // Логика для show page
}

const MODEL = {
    page: {
        content: {
            form: {
                submit: someFunc1,
            },
            infoBlock: {
                more: {
                    click: someFunc2,
                },
            },
        },
        footer: {
            blog: {
                about: {
                    expand: someFunc3,
                },
                articles: {
                    click: someFunc4,
                },
            },
            show: someFunc5,
        },
        header: {
            logo: someFunc6,
            user: {
                login: someFunc7,
                logout: someFunc8,
            },
        },
        show: someFunc9,
    },
};

// solution(root)
console.log('solution(root)::: ', solution(MODEL));