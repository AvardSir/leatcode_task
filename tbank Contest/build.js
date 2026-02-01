function doTask(data) {
    if (!data || data.trim() === '') return 0;

    const [lStr, rStr] = data.trim().split(/\s+/);
    const l = parseInt(lStr, 10);
    const r = parseInt(rStr, 10);
    
    if (isNaN(l) || isNaN(r) || l > r) return 0;

    // Функция для проверки одного числа
    function isSameDigitNumber(num) {
        if (num === 0) return true; // 0 состоит из одинаковых цифр
        
        const str = num.toString();
        const firstDigit = str[0];
        
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== firstDigit) return false;
        }
        return true;
    }

    let count = 0;
    
    // Перебираем все числа в диапазоне (оптимизировано)
    for (let digit = 0; digit <= 9; digit++) {
        let num = digit;
        
        while (num <= r) {
            if (num >= l && isSameDigitNumber(num)) {
                count++;
            }
            
            if (digit === 0) break; // Для 0 только один раз
            
            num = num * 10 + digit;
            
            // Защита от переполнения
            if (num > Number.MAX_SAFE_INTEGER / 10) break;
        }
    }
    
    return count;
}



var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let data = [];
let count = 0;
rl.on('line', (line) => {
    data.push(line.trim());
    count++;

    if (count === 1) {
        let res = doTask(data[0]);
        console.log(res);
        rl.close();
    }
});

rl.on('close', () => {

    process.exit(0);
});



