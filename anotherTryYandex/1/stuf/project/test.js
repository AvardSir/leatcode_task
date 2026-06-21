// test.js
const interpretNavConfig = require('./index.js');

async function runTests() {
    // Пример 1: Простой параметр
    const config1 = {
        pathRules: [
            // { pattern: "users[id]", destination: "/pages/1.html", redirect: 'helo/1.htlm' },
            { pattern: "users[id]", destination: "/pages/2.html" }
        ],
        processors: 'its okey'
        ,
        errorPath: "/pages/error.html"
    };

    const result1 = await interpretNavConfig(config1, "users/abc-01");
    console.log("Пример 1:", result1);
    // Ожидаем: /pages/user.html

    // Пример 2: Опциональный параметр
    const config2 = {
        pathRules: [
            { pattern: "archive[year][month?]", destination: "/pages/archive.html" }
            //                         ↑ модификатор ВНУТРИ скобок
        ],
        errorPath: "/pages/error.html"
    };


    const result2 = await interpretNavConfig(config2, "archive/2024");
    console.log("Пример 2:", result2);
    // Ожидаем: /pages/archive.html

    // Пример 3: Лишний сегмент → ошибка
    const config3 = {
        pathRules: [
            { pattern: "a[b?]", destination: "/ok" }
        ],
        errorPath: "/err"
    };

    const result3 = await interpretNavConfig(config3, "a/b/c");
    console.log("Пример 3:", result3);
    // Ожидаем: /err

    // Пример 4: Несколько правил (первое подходящее)
    const config4 = {
        pathRules: [
            { pattern: "admin", destination: "/admin.html" },
            { pattern: "users[id]", destination: "/user.html" }
        ],
        errorPath: "/404"
    };

    const result4 = await interpretNavConfig(config4, "users/123");
    console.log("Пример 4:", result4);
    // Ожидаем: /user.html (не admin.html)

    // Пример 5: Подстановка параметров в destination
    const config5 = {
        pathRules: [
            { pattern: "product[id]", destination: "/items/{id}/details.html" }
        ],
        errorPath: "/404"
    };

    const result5 = await interpretNavConfig(config5, "product/phone123");
    console.log("Пример 5:", result5);
    // Ожидаем: /items/phone123/details.html
}

runTests().catch(console.error);