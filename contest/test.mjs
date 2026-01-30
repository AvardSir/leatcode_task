const str = "test1 test2 test3";
const regex = /test(\d)/g;

// match() с флагом g - только полные совпадения
// console.log(str.match(regex)); // ["test1", "test2", "test3"]

// matchAll() - полная информация
const matches = str.matchAll(regex);
// console.log('matches::: ', matches);
for (const match of matches) {
    console.log('match::: ', match);
    // console.log(`Совпадение: "${match[0]}", Группа: ${match[1]}, Индекс: ${match.index}`);
}
// Совпадение: "test1", Группа: 1, Индекс: 0
// Совпадение: "test2", Группа: 2, Индекс: 6
// Совпадение: "test3", Группа: 3, Индекс: 12