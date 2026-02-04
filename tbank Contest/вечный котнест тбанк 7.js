function doTask(data) {
    const n = parseInt(data[0]);
    data = data[1]
    data = data.split(' ')
    data = data.filter(v => v != '')
    data = data.map(Number)
    // debugger
    let students = data
    students = students.map((v) => v - 1)

    let toFrom = new Map()

    let isSecondVisited = false
    let secondVisited = []
    let badAns = `-1 -1`

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        if (!toFrom.has(student)) {
            toFrom.set(student, i)
        }
        else {
            if (!isSecondVisited) {
                isSecondVisited = true
                secondVisited = [i, toFrom.get(student)]
            }
            else {
                return badAns
            }
        }

    }

    if (secondVisited) {
        secondVisited = secondVisited.map((v) => v + 1)
        return secondVisited.join(' ')
    }
    else {
        return badAns
    }

}

let testStr1 = `3
1  2  3`

// let testStr2 = `3
// 1  3  1`

// doTask(data.split('\n'))
console.log('::: ', doTask(testStr1.split('\n')));

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let data = [];
// let count = 0;

// rl.on('line', (line) => {
//     data.push(line.trim());
//     count++;

//     if (count === 2) {
//         let res = doTask(data);
//         console.log(res);
//         rl.close();
//     }
// });

// rl.on('close', () => {
//     process.exit(0);
// });