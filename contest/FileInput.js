const inputData = fs.readFileSync('input.txt', 'utf8');

// 2. Разбор и обработка данных (ваш алгоритм)
const numbers = inputData.split(' ');
const a = Number(numbers[0]);
const b = Number(numbers[1]);
const result = a + b;
console.log('result::: ', result);

// 3. Запись результата в файл output.txt
fs.writeFileSync('output.txt', result);
