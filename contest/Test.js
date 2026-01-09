const fs = require('fs');
// Читаем весь ввод как строку, обрезаем лишние пробелы/переносы
// const data = fs.readFileSync(0, 'utf8');
let data = `2 2`
// console.log('data::: ', data);
// Далее парсим data в зависимости от задачи

data = data.split(' ')
let a = Number(data[0])
let b = Number(data[1])
// data = data[0] + 
console.log(a + b);

return 