

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function logN(n) {
//     return Math.log2(n)
// }

// let total = 0;
// process.stdin.on('end', () => { console.log(total); process.exit(0); });
// rl.on('line', function (data) {

//     function doneTask(data) {

//         function splitDataOnStr(data) {
//             return data.split('\n')
//         }

//         // let [str1, str2, str3] = splitDataOnStr(data)
//         let [str1, str2, str3] = data

//         // debugger

//         function transfromStr(str) {
//             str = str.split(' ')
//             str = str.filter((v) => v != '')
//             // debugger
//             str = str.map((v) => parseInt(v))
//             return str
//         }
//         let [n, t] = transfromStr(str1)
//         if (n == 1) {
//             return 0
//         }
//         let floors = transfromStr(str2)
//         let needWorker = transfromStr(str3)[0]

//         let idNeeWorkr = needWorker - 1
//         let valNeedWorker = floors[idNeeWorkr]
//         // debugger

//         // let ar = [1]
//         // ar.length

//         let maxVal = floors[floors.length - 1]
//         let minVal = floors[0]

//         let minDelta = Math.min(maxVal - valNeedWorker, valNeedWorker - minVal)


//         if (minDelta <= t) {
//             return maxVal - minVal
//         }
//         else {
//             let maxDelta = Math.max(maxVal - valNeedWorker, valNeedWorker - minVal)
//             return minDelta * 2 + maxDelta
//         }





//     }

//     total = doneTask(data)

//     return total

// });



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];
let count = 0;

// console.log('Введите 3 строки (после каждой нажмите Enter):');

rl.on('line', (line) => {
    data.push(line.trim());
    count++;

    if (count === 3) {
        // console.log('\n=== Все строки получены ===');
        // console.log('Строка 1:', data[0]);
        // console.log('Строка 2:', data[1]);
        // console.log('Строка 3:', data[2]);

        // Дальнейшая обработка
        let res = doneTask(data);
        console.log('res::: ', res);


        rl.close();
    } else {
        // console.log(`Осталось ввести ${3 - count} строк(и)`);
    }
});

rl.on('close', () => {
    // console.log('Ввод завершен.');
    process.exit(0);
});
