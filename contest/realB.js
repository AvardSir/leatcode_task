function solution(office, history) {
    // Ваш код здесь
    function reversTransofrm(ij) {
        let [i, j] = ij.split(".")
        i = Number(i)
        j = Number(j)

        i = office.length - i
        j = j - 1
        return [i, j]
    }
    for (let i = 0; i < history.length; i++) {
        const el = history[i];
        let ij = el[0]
        let [x, y] = reversTransofrm(ij)

        let activity = el[1]
        office[x][y] += activity
    }
    let maxVal = 0
    let x, y
    for (let i = office.length - 1; i >= 0; i--) {
        const element = office[i];
        for (let j = 0; j < element.length; j++) {
            const elIJ = element[j];
            if (elIJ > maxVal) {
                maxVal = elIJ;
                [x, y] = [i, j]
            }
        }
    }
    if (maxVal == 0) {
        return null
    }


    function transorm(x, y) {

        x = office.length - x
        y = 1 + y

        let resStr = [x, y].join('.')
        return resStr
        return [i, j]
    }

    return transorm(x, y)
}

module.exports = solution;

let office = [[0, 0, 0], [0, 0, 1], [2, 3, 0]]

let history = [["3.1", 4], ["2.2", 5], ["3.2", 6]]


// solution(office, history)
console.log('solution(office, history)::: ', solution(office, history));