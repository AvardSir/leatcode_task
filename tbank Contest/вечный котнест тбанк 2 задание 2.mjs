var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function logN(n) {
    return Math.log2(n)
}

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
    // data = data.split(' ');

    let N = parseInt(data)

    if (N <= 0) {
        total = 0
        return 0
    }
    else {
        total = logN(N)
        total = Math.ceil(total)
    }

    return total


    data = data.map((v) => parseInt(v))

    let [A, B, C, D] = data
    if (B >= D) {
        total = A

    }
    else {
        let ostatok = D - B

        total = ostatok * C + A

    }
    return total

});


