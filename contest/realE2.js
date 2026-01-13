function getAvailableSatellites(satellites, timeoutMs = 3000) {
    // Ваш код
    let ans = []
    for (const key in satellites) {
        // if (!Object.hasOwn(satellites, key)) continue;

        const sat = satellites[key];
        // let name = sat.name

        function timer(timeoutMs) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(null)
                }, timeoutMs);
            })
        }

        function checkThis(sat) {
            return sat.check()
                .then(() => {
                    return sat.name
                })
                .catch(() => {
                    return null
                })
            return new Promise((resolve, reject) => {
                // resolve(sat.name)
            })
        }

        async function racers() {
            const p = await Promise.race([timer(timeoutMs), checkThis(sat)]).then((name) => {
                if (name != null) {
                    ans.push(name);
                }
            })

        }
        racers()


    }
    return ans
}
module.exports = getAvailableSatellites;

// let satellites = [
//     {
//         name: "Первый",
//         check: () => { Promise }
//     },
//     {
//         name: "Второй",
//         check: () => { Promise }
//     }
// ]
function createTimeoutPromise(delayMs, name, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name}: ответ через ${delayMs}мс`);

            if (shouldFail) {
                reject(new Error(`${name}: ошибка соединения`));
            } else {
                resolve(`${name}: данные получены`);
            }
        }, delayMs);
    });
}

// Использование в спутниках
let satellites = [
    {
        name: "Первый",
        check: () => {
            // Вызываем нашу функцию с разными параметрами
            return createTimeoutPromise(3500, "Первый спутник");
        }
    },
    {
        name: "Второй",
        check: () => {
            // Второй спутник отвечает быстрее
            return createTimeoutPromise(500, "Второй спутник");
        }
    },
    {
        name: "Третий",
        check: () => {
            // Третий спутник с ошибкой
            return createTimeoutPromise(1500, "Третий спутник", true);
        }
    },
    {
        name: "Четвертый",
        check: () => {
            // Можно и прямо в check создавать Promise
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`${this.name}: быстрый ответ через 200мс`);
                }, 200);
            });
        }
    }
];


// getAvailableSatellites(satellites, timeoutMs = 3000)
console.log('', getAvailableSatellites(satellites, 3000));