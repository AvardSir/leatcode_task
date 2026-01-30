


function doneTask(data) {

    function splitDataOnStr(data) {
        return data.split('\n')
    }

    let [str1, str2, str3] = splitDataOnStr(data)

    // debugger

    function transfromStr(str) {
        str = str.split(' ')
        str = str.filter((v) => v != '')
        // debugger
        str = str.map((v) => parseInt(v))
        return str
    }
    let [n, t] = transfromStr(str1)
    if (n == 1) {
        return 0
    }
    let floors = transfromStr(str2)
    let needWorker = transfromStr(str3)[0]

    let idNeeWorkr = needWorker - 1
    let valNeedWorker = floors[idNeeWorkr]
    // debugger

    // let ar = [1]
    // ar.length

    let maxVal = floors[floors.length - 1]
    let minVal = floors[0]

    let minDelta = Math.min(maxVal - valNeedWorker, valNeedWorker - minVal)


    if (minDelta <= t) {
        return maxVal - minVal
    }
    else {
        let maxDelta = Math.max(maxVal - valNeedWorker, valNeedWorker - minVal)
        return minDelta * 2 + maxDelta
    }





}

let testData1 = `5  5
1  4  9  16  25
2`

let testData2 = `6  4
1  2  3  6  8  25
5`


console.log('doneTask(data)::: ', doneTask(testData1));
// debugger