
function doTask(data) {
    // Парсим входные данные
    const n = Number(data[0]);
    const vertices = [];
    for (let i = 1; i <= n; i++) {
        const [x, y] = data[i].split(' ').map(Number);
        vertices.push([x, y]);
    }

    // Если вершина одна, выводим координату X этой вершины
    if (n === 1) {
        return vertices[0][0].toFixed(6);
    }

    // Если вершины две, выводим координату центра линии, образованной двумя вершинами
    if (n === 2) {
        const centerX = (vertices[0][0] + vertices[1][0]) / 2.0;
        return centerX.toFixed(6);
    }

    // Находим половинную площадь
    const halfArea = calculatePolygonArea(vertices) / 2.0;

    // Определяем переменные для бинарного поиска
    let left = Math.min(...vertices.map(v => v[0])); // Минимальная x-координата
    let right = Math.max(...vertices.map(v => v[0])); // Максимальная x-координата
    const precision = 1e-7; // Точность для бинарного поиска
    let leftArea = 0.0; // Площадь левой части многоугольника
    let mid = 0.0; // Текущая x-координата

    // Начинаем бинарный поиск в цикле
    while (true) {
        mid = (left + right) / 2;
        leftArea = calculateLeftArea(vertices, mid);

        // Если разница площадей меньше заявленной точности, прерываем цикл
        if (Math.abs(halfArea - leftArea) <= precision) break;

        // Сравниваем площади
        if (leftArea < halfArea) {
            left = mid; // Если площадь меньше, ищем вправо
        } else {
            right = mid; // Если площадь больше или равна, ищем влево
        }
    }

    // Возвращаем значение X с точностью 6 знаков после запятой
    return ((left + right) / 2).toFixed(6);
}

// Функция для вычисления площади многоугольника
function calculatePolygonArea(vertices) {
    let area = 0.0;
    const n = vertices.length;

    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += (vertices[i][0] * vertices[j][1] - vertices[j][0] * vertices[i][1]);
    }

    return Math.abs(area) / 2.0;
}

// Функция для вычисления площади левой части многоугольника по заданной x
function calculateLeftArea(vertices, x) {
    let area = 0.0;
    const n = vertices.length;

    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const x1 = vertices[i][0];
        const y1 = vertices[i][1];
        const x2 = vertices[j][0];
        const y2 = vertices[j][1];

        // Проверяем, пересекает ли линия x
        if (x1 <= x && x2 <= x) {
            // Оба конца слева от x
            area += (x2 - x1) * (y2 + y1) / 2.0;
        } else if (x1 >= x && x2 >= x) {
            // Оба конца справа от x, не добавляем площадь
            continue;
        } else {
            // Одна вершина слева, другая справа
            const intersectY = y1 + (y2 - y1) * (x - x1) / (x2 - x1); // Находим y при пересечении

            if (x1 < x) {
                // Если x1 слева, добавляем площадь
                area += (x - x1) * (y1 + intersectY) / 2.0;
            } else {
                // Если x2 слева, добавляем площадь
                area += (x2 - x) * (intersectY + y2) / 2.0;
            }
        }
    }

    return Math.abs(area);
}

// // Код для чтения ввода в контесте
// if (typeof require !== 'undefined' && require.main === module) {
//     const readline = require('readline');
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let data = [];
//     let n = 0;

//     rl.on('line', (line) => {
//         data.push(line.trim());

//         if (data.length === 1) {
//             n = Number(data[0]);
//         }

//         if (data.length === n + 1) {
//             const result = doTask(data);
//             console.log(result);
//             rl.close();
//         }
//     });

//     rl.on('close', () => {
//         process.exit(0);
//     });
// }

// // Экспортируем для использования в других модулях (опционально)
// module.exports = { doTask, calculatePolygonArea, calculateLeftArea };
// todo прочесть заново код

let testStr1

testStr1 = `5
35
40
101
59
63`


// testStr1 = `2
// 100
// 98
// 99
// `


// testStr1 = `2`

// testStr1 = `4
// 2
// 100
// 0
// 0`

// testStr1 = `5
// 110
// 40
// 110
// 40
// 110`


// testStr1 = `3
// 111
// 5
// 111`

console.log('::: ', doTask(testStr1.split('\n')));


