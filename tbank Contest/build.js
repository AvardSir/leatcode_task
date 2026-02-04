function doTask(data) {
    const n = Number(data[0]);
    const a = data[1].split(' ').filter(v => v !== '').map(Number);

    // Проверка корректности ввода
    if (n === 0 || a.length !== n) {
        return "-1 -1";
    }

    // Функция проверки, образует ли граф один цикл
    function isCycle(arr) {
        const visited = new Array(n + 1).fill(false); // +1 для удобства (индексы 1..n)
        let current = 1;
        let count = 0;

        while (!visited[current]) {
            visited[current] = true;
            current = arr[current - 1]; // -1 т.к. arr индексируется с 0
            count++;
        }

        return current === 1 && count === n;
    }

    // Если уже один цикл
    if (isCycle(a)) {
        return "-1 -1";
    }

    // Массив для подсчета входящих ребер (индексы 1..n)
    const incoming = new Array(n + 1).fill(0);

    // Подсчет входящих ребер
    for (let i = 0; i < n; i++) {
        incoming[a[i]]++;
    }

    // Ищем учеников с 0 и 2 вхождениями
    const doubleIncomingIndexes = [];
    const zeroIncomingPupils = [];

    for (let pupil = 1; pupil <= n; pupil++) {
        const inCount = incoming[pupil];

        if (inCount === 2) {
            // Находим индексы (0-based) учеников, которые дарят подарок этому pupil
            const firstIndex = a.indexOf(pupil);
            const lastIndex = a.lastIndexOf(pupil);
            if (firstIndex !== -1) doubleIncomingIndexes.push(firstIndex);
            if (lastIndex !== -1 && lastIndex !== firstIndex) doubleIncomingIndexes.push(lastIndex);
            // debugger
        }

        if (inCount === 0) {
            zeroIncomingPupils.push(pupil);
        }

        // Если вхождений больше 2, невозможно исправить одной заменой
        if (inCount > 2) {
            return "-1 -1";
        }
    }

    // Если есть один ученик с двумя входящими и один ученик без входящих
    if (doubleIncomingIndexes.length === 2 && zeroIncomingPupils.length === 1) {
        const zeroPupil = zeroIncomingPupils[0];

        // Пробуем заменить каждого из двух учеников, которые дарят одному и тому же
        for (const index of doubleIncomingIndexes) {
            const aCopy = [...a];
            aCopy[index] = zeroPupil;

            if (isCycle(aCopy)) {
                return `${index + 1} ${zeroPupil}`;
            }
        }
    }

    return "-1 -1";
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