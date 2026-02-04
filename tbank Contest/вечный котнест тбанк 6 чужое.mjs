function doTask(data) {
    const n = parseInt(data[0]);
    const heights = data[1].split(' ').map(Number);

    function checkStudents(input) {
        let evenMistakeNum = 0;
        let evenMistakes = 0;
        let oddMistakeNum = 0;
        let oddMistakes = 0;

        if (input.length < 2) {
            return [-1, -1];
        } else {
            // Проверяем четные позиции (индексы 0, 2, 4...)
            for (let i = 0; i < input.length; i += 2) {
                if (input[i] % 2 === 0) {
                    evenMistakes++;
                    evenMistakeNum = i;
                }
            }

            // Проверяем нечетные позиции (индексы 1, 3, 5...)
            for (let i = 1; i < input.length; i += 2) {
                if (input[i] % 2 !== 0) {
                    oddMistakes++;
                    oddMistakeNum = i;
                }
            }

            if (evenMistakes === 1 && oddMistakes === 1) {
                return [evenMistakeNum + 1, oddMistakeNum + 1];
            } else if (evenMistakes === 0 && oddMistakes === 0 && input.length > 2) {
                return [1, 3];
            } else {
                return [-1, -1];
            }
        }
    }

    const result = checkStudents(heights);
    return result.join(' ');
}

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];
let count = 0;

rl.on('line', (line) => {
    data.push(line.trim());
    count++;

    if (count === 2) {
        let res = doTask(data);
        console.log(res);
        rl.close();
    }
});

rl.on('close', () => {
    process.exit(0);
});