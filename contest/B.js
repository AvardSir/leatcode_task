const office = [
    [0, 0, 0],
    [0, 0, 1],
    [2, 3, 0]
];

const history = [["3.1", 4], ["2.2", 5], ["3.2", 6]];
function solution(office, history) {
    if (history.length == 0 || office.length == 0) {
        return null
    }
    // Ваш код здесь

    let maxI = office.length - 1
    let maxJ = office[0].length - 1
    function strToIndex(str) {
        let el = str.split('.')
        let first = Number(el[0])

        let second = Number(el[1])
        function transformI(i) {
            let len = office.length
            // return (i + len) % len
            return (len - i)
        }
        return [transformI(first), second - 1]
    }

    // let [i, j] = strToIndex(str)

    for (let i = 0; i < history.length; i++) {
        const letCurHistor = history[i];
        let IJStr = letCurHistor[0]
        let [x, y] = strToIndex(IJStr)
        let curActiviit = letCurHistor[1]
        office[x][y] += curActiviit

        let thththt = 1


    }
    let maxVal = -Infinity
    let maxIi = -1
    let maxJj = -1
    for (let i = 0; i < office.length; i++) {
        const element = office[i];
        for (let j = 0; j < element.length; j++) {
            const elementJ = element[j];
            if (maxVal < elementJ) {

                maxVal = elementJ;

                [maxIi, maxJj] = [i, j]
            }

        }

    }
    if (maxVal == 0 || maxVal == 1) {
        return null
    }
    function transormIrever(i) {
        let len = office.length
        return len - i
    }
    let i = transormIrever(maxIi)
    let j = maxJj + 1

    let ansStr = [i, j].join('.')
    let htht = 1
    return ansStr


}
// solution(office, history); // "3.2"
console.log('solution(office, history)::: ', solution(office, history));


// module.exports = solution;


// console.log(makeTable(data, columns));
// module.exports = makeTable;

