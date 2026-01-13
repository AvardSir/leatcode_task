function solution(office, history) {
    function reversTransofrm(ij) {
        let [i, j] = ij.split(".")
        i = Number(i)
        j = Number(j)

        i = office.length - i
        j = j - 1
        return [i, j]
    }
    for (let i = 0; i < history.length; i++) {
        const curChange = history[i];
        let ij = curChange[0]
        let [x, y] = reversTransofrm(ij)

        let activity = curChange[1]
        office[x][y] += activity
    }
    let maxVal = 0
    let x, y
    for (let i = 0; i < office.length; i++) {
        const row = office[i];
        for (let j = 0; j < row.length; j++) {
            const colum = row[j];
            if (colum > maxVal) {
                maxVal = colum;
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
    }

    return transorm(x, y)
}

module.exports = solution;