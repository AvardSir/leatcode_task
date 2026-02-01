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



        const l = BigInt(lStr);
        const r = BigInt(rStr);

        let count = 0n;

        // Для каждой длины числа от длины(l) до длины(r)
        for (let j = numberSize(l); j <= numberSize(r); j++) {
            // Для каждой цифры от 1 до 9
            for (let i = 1; i <= 9; i++) {
                // Число = цифра * репьюнит длины j
                // Например: для i=7, j=3: 7 * 111 = 777
                const x = BigInt(i) * repUnit(j);

                if (x >= l && x <= r) {
                    count++;
                }
            }
        }

        console.log(count.toString());
        rl.close();
    });
}

/**
 * Вычисление репьюнита (repunit) в десятичной системе.
 * Repunit длины n: 1, 11, 111, 1111, ...
 * 
 * @param {number} degree - количество цифр 1 в представлении по основанию 10
 * @return {bigint} репьюнит заданной длины
 */
function repUnit(degree) {
    return (degreeTen(degree) - 1n) / 9n;
}

/**
 * Быстрое возведение десяти в степень.
 * Используем BigInt для больших чисел.
 * 
 * @param {number} n - показатель степени
 * @return {bigint} значение 10^n
 */
function degreeTen(n) {
    switch (n) {
        case 1: return 10n;
        case 2: return 100n;
        case 3: return 1000n;
        case 4: return 10000n;
        case 5: return 100000n;
        case 6: return 1000000n;
        case 7: return 10000000n;
        case 8: return 100000000n;
        case 9: return 1000000000n;
        case 10: return 10000000000n;
        case 11: return 100000000000n;
        case 12: return 1000000000000n;
        case 13: return 10000000000000n;
        case 14: return 100000000000000n;
        case 15: return 1000000000000000n;
        case 16: return 10000000000000000n;
        case 17: return 100000000000000000n;
        case 18: return 1000000000000000000n;
        default: return 1n;
    }
}

/**
 * Определение количества цифр в числе.
 * 
 * @param {bigint} num - число
 * @return {number} количество цифр в числе
 */
function numberSize(num) {
    // Используем абсолютное значение
    const number = num < 0n ? -num : num;

    // Каскадные проверки для определения длины числа
    if (number < 100000n) {  // 10^5
        if (number < 100n) {
            if (number < 10n) {
                return 1;
            } else {
                return 2;
            }
        } else {
            if (number < 1000n) {
                return 3;
            } else {
                if (number < 10000n) {
                    return 4;
                } else {
                    return 5;
                }
            }
        }
    } else if (number < 10000000000n) {  // 10^10
        if (number < 10000000n) {
            if (number < 1000000n) {
                return 6;
            } else {
                return 7;
            }
        } else {
            if (number < 100000000n) {
                return 8;
            } else {
                if (number < 1000000000n) {
                    return 9;
                } else {
                    return 10;
                }
            }
        }
    } else if (number < 1000000000000000n) {  // 10^15
        if (number < 1000000000000n) {
            if (number < 100000000000n) {
                return 11;
            } else {
                return 12;
            }
        } else {
            if (number < 10000000000000n) {
                return 13;
            } else {
                if (number < 100000000000000n) {
                    return 14;
                } else {
                    return 15;
                }
            }
        }
    } else if (number <= 1000000000000000000n) {  // 10^18
        if (number < 100000000000000000n) {
            if (number < 10000000000000000n) {
                return 16;
            } else {
                return 17;
            }
        } else {
            return 18;
        }
    }

    return 0;
}

// Запуск программы
if (require.main === module) {
    main();
}

// Экспорт функций для тестирования
module.exports = {
    repUnit,
    degreeTen,
    numberSize,
    main
};