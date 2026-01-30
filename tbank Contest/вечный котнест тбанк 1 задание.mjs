var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
    data = data.split(' ');
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


