/**
 * Упрощенная версия без классов
 */

function solveMatrix(rows, x, y) {
    // Определитель основной матрицы
    const det = rows[0][0] * rows[1][1] - rows[0][1] * rows[1][0];

    // Определитель с замененным первым столбцом
    const detX = x * rows[1][1] - y * rows[0][1];

    // Определитель с замененным вторым столбцом
    const detY = rows[0][0] * y - rows[1][0] * x;

    return [detX / det, detY / det];
}

function doTask(data) {

    let roomCords = data[0]
    function cleanData(str) {
        str = str.split(' ')
        str = str.filter((v) => v != '')
        str = str.map(Number)
        return str
    }
    roomCords = cleanData(roomCords)
    // let [xRoom, yRoom] = roomCords
    let planCords = data[1]
    planCords = cleanData(planCords)
    //  (0 0)
    // let [leftDownX, leftDownY] = [planCords[0], planCords[1]]

    // // (X 0)
    // let [rightDownX, rightDownY] = [planCords[2], planCords[3]]

    // // (X Y)
    // let [upRightX, upRightY] = [planCords[4], planCords[5]]

    // // (0,Y)
    // let [leftRightX, leftRightY] = [planCords[6], planCords[7]]


    // Тестовые данные
    const [A, D] = roomCords;
    const [Ax, Ay, Bx, By, Cx, Cy, Dx, Dy] = planCords;

    // Матрица коэффициентов
    const matrix = [
        [A - Bx + Ax, -Dx + Ax],
        [-By + Ay, D - Dy + Ay]
    ];

    // Решение системы
    const [x, y] = solveMatrix(matrix, Ax, Ay);

    // Финальный результат
    const resultX = x * A;
    const resultY = y * D;

    // Форматированный вывод
    // console.log(); // 2.500000 2.083333
    return [resultX.toFixed(6), resultY.toFixed(6)].join(' ')
}
// todo прочесть обьяснение


let testStr1

testStr1 = `10  5
3.0  2.5  1.0  2.5  1.0  1.5  3.0  1.5`
// console.log('::: ', doTask(testStr1.split('\n')));
let firstPartData = '10  5'
let secondPartData = '3.0  2.5  1.0  2.5  1.0  1.5  3.0  1.5'
let dataTest1 = [firstPartData, secondPartData]

console.log('::: ', doTask(dataTest1));


