function doneTask(data) {
    let [str1, str2, str3] = data

    function transfromStr(str) {
        str = str.split(' ')
        str = str.filter((v) => v != '')
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

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];
let count = 0;
rl.on('line', (line) => {
    data.push(line.trim());
    count++;

    if (count === 3) {
        let res = doneTask(data);
        console.log(res);


        rl.close();
    }
    process.exit(0);
});

