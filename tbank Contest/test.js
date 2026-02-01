function countSpecialNumbers(l, r) {

    function getLenNum(num) {
        return num.toString().length
    }
    let ans = 0
    for (let len = getLenNum(l); len <= getLenNum(r); len++) {
        // const element = array[len];
        let repUnit = (10 ** len - 1) / 9

        for (let i = 1; i <= 9; i++) {

            let curNum = repUnit * i
            if (l <= curNum && curNum <= r) {
                ans++
            }
            // const element = array[i];

        }


    }
    return ans

    // getLenNum(10)
    // console.log('getLenNum(10)::: ', getLenNum(110));
    debugger
}

// Упрощенная функция определения длины числа
function getLength(num) {
    return Math.abs(num).toString().length;
}

let [l, r] = [1, 100]

// Пример использования
console.log(countSpecialNumbers(l, r)); // 1, 11, 22, 33, 44, 55, 66, 77, 88, 99 = 9
