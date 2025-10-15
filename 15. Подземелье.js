function scan(map) {
    // console.log('map::: ', map);
    // ваш код
    if (!map.length || !map[0].length) return { ceil: 0, floor: 0, both: 0 };

    let memo = []
    // hash
    for (let i = 0; i < map.length; i++) {
        let element = map[i];

        element = Array.from({ length: element.length }, v => 0)
        // let cur

        memo.push(element)

    }

    let check = 1

    let isBoth = false
    // dfs функция проверка справа, снизу,слева, сверху 
    function dfs(x, y) {
        // ВСЕ проверки ДО отметки посещения!
        if (x < 0 || x >= map[0].length || y < 0 || y >= map.length) return;
        if (memo[y][x] == 1) return;
        if (map[y][x] == 0) return;

        // Только теперь отмечаем как посещенное
        memo[y][x] = 1;

        if (y == map.length - 1) {
            isBoth = true;
        }

        // обход соседей
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }

    // верхний проход слева верха
    let firstRow = map[0]
    // подсчет ceil
    let ceil = 0
    let both = 0
    let floor = 0
    for (let j = 0; j < firstRow.length; j++) {
        const element = firstRow[j];

        let i = 0

        let x = j
        let y = 0
        // console.log('memo[y][x]::: ', memo[y][x]);

        // TODO:dfs функцию
        if (memo[y][x] != 1 && map[y][x] == 1) {

            // let isBoth = false
            // TODO: тут работаю
            dfs(x, y)
            if (isBoth) {
                both++
                isBoth = false
            }
            else {
                ceil++
            }
            // условие Дотрунулся до пола ceil-- both++
        }


    }
    // ceil
    let slsl = 1


    // нижний проход

    let j = 0
    while (j < firstRow.length) {
        let x = j
        let y = map.length - 1
        j++

        if (memo[y][x] != 1 && map[y][x] == 1) {

            // TODO: тут работаю
            // dfs(x, y)
            // let z = j
            // while (memo[y][x] != 1 && map[y][x] == 1) {

            //     z++
            // }

            dfs(x, y)
            floor++

            // условие Дотрунулся до пола ceil-- both++
            // ceil++
        }
    }


    return { ceil: ceil, floor: floor, both: both }
}

module.exports = { scan };

data = [
    [1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1]
]

data = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
]

// data = [
//     [1, 0, 1],
//     [0, 1, 0],
// ]

// data=[
//   [1, 0, 1],
//   [0, 1, 1],
//   [1, 1, 0],
// ]
console.log((scan(data)));


function runTest(input, expected, func) {
    console.log('='.repeat(50));
    console.log('📝 ТЕСТ:');
    console.log('Входные данные:', JSON.stringify(input));

    try {
        const result = func(input);
        console.log('✅ Результат:', JSON.stringify(result));
        console.log('✅ Ожидаемый:', JSON.stringify(expected));

        // Для объектов сравниваем через JSON.stringify
        const isPassed = typeof result === 'object' && typeof expected === 'object'
            ? JSON.stringify(result) === JSON.stringify(expected)
            : result === expected;

        if (isPassed) {
            console.log('🎉 ТЕСТ ПРОЙДЕН!');
        } else {
            console.log('❌ ТЕСТ НЕ ПРОЙДЕН!');
            console.log('Разница:');
            console.log('Получено:', result);
            console.log('Ожидалось:', expected);
        }

        return isPassed;

    } catch (error) {
        console.log('💥 ОШИБКА ВЫПОЛНЕНИЯ:', error.message);
        return false;
    }
}


data = [
    [1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1]
]
ans = { ceil: 2, floor: 2, both: 1 }
runTest(data, ans, scan)

data = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
]
// Результат: { ceil: 1, floor: 0, both: 0 }

ans = { ceil: 1, floor: 0, both: 0 }
runTest(data, ans, scan)


data = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
]
ans = { ceil: 0, floor: 0, both: 1 }
runTest(data, ans, scan)

data = [
    [1, 0, 1],
    [0, 1, 0],
]
ans = { ceil: 2, floor: 1, both: 0 }
runTest(data, ans, scan)



data = [
    [1, 0, 1],
    [1, 1, 0],
]
ans = { ceil: 1, floor: 0, both: 1 }
runTest(data, ans, scan)




data = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
]
ans = { ceil: 0, floor: 0, both: 1 }
runTest(data, ans, scan)