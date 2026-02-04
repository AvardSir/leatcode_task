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



let testStr1 = `3
1  2  3`




testStr1 = `3
1  3  1`



// testStr1 = `3
// 1  `


// testStr1 = `3
// 3  3  1`

// testStr1 = `3
// 2  3  1`


// testStr1 = `3
// 2 3 4 5 5`


// testStr1 = `3
// 2 2 3 4`




// testStr1 = `3
// 2 3 4 4`

// testAr = [2, 3, 4, 5, 6, 6]


// testStr1 = `3
// 2 3 4 5 6 6`


// function addTest(ar) {
//     return `3\n` + ar.join(' ')
// }

// testStr1 = addTest(testAr)


// testStr1 = addTest([2, 1, 2, 3])

// let ar =
//     [2, 1, 4, 5, 3]
// testStr1 = addTest(ar)



// ar =

//     [2, 2, 1]
// testStr1 = addTest(ar)





// ar =

//     [2, 2, 2, 3, 4, 5]
// testStr1 = addTest(ar)


// ar =

//     [2, 2, 2, 2, 4]


// testStr1 = addTest(ar)



// ar =

//     [2, 2, 2, 2, 4]


// testStr1 = addTest(ar)


// ar =

//     [2, 1]


// testStr1 = addTest(ar)

// testStr1 = `3\n` + `2 3 1 1`

console.log('::: ', doTask(testStr1.split('\n')));
