const readline = require('readline');

/**
 * Задача E. Тестирование.
 * Подсчет чисел, состоящих из одной повторяющейся цифры в диапазоне [l, r]
 */

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('', (input) => {
        const [lStr, rStr] = input.trim().split(/\s+/);

        function countSpecialNumbers(l, r) {
            let count = 0;



            // Для каждой длины числа
            for (let length = getLength(l); length <= getLength(r); length++) {
                // Вычисляем репьюнит для этой длины: 1, 11, 111, ...
                const repunit = (Math.pow(10, length) - 1) / 9;

                // Для каждой цифры 1-9
                for (let digit = 1; digit <= 9; digit++) {
                    const number = digit * repunit;

                    if (number >= l && number <= r) {
                        count++;
                    }
                }
            }

            return count;
        }

        // Упрощенная функция определения длины числа
        function getLength(num) {
            return Math.abs(num).toString().length;
        }

        let [l, r] = [parseInt(lStr), parseInt(rStr)]

        // Пример использования
        console.log(countSpecialNumbers(l, r)); // 1, 11, 22, 33, 44, 55, 66, 77, 88, 99 = 9

        // console.log(count.toString());
        rl.close();
    });
}


// Запуск программы
if (require.main === module) {
    main();
}


// Экспорт функций для тестирования
module.exports = {

    main
};