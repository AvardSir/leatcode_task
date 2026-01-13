let testOB = { a: 2 }

let testObj = { a: 2, b: 3, c: 4 }
let someFunc1 = function dpdpdp(l) {

}, someFunc2, someFunc3, someFunc4, someFunc5, someFunc6, someFunc7, someFunc8, someFunc9
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

function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
let ans = {}

function dfs(Obj, strBefore) {
    for (const curKey in Obj) {


        const el = Obj[curKey];
        if (!isObject(el)) {
            // end
            ans[strBefore] = el
            // TODO
        };

        // TODO
        dfs(el, strBefore + '.' + curKey)
        // console.log('key::: ', curKey);
        // console.log('el::: ', el);


    }
}
dfs(MODEL, '')
// console.log('dfs(MODEL,::: ', dfs(MODEL, ''));
// ans
console.log('ans::: ', ans);
let hhtht = 1