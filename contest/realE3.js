function getAvailableSatellites(satellites, timeoutMs = 3000) {
    return (async () => {
        let ans = [];

        for (let i = 0; i < satellites.length; i++) {
            const sat = satellites[i];
            const timeoutPromise = new Promise(resolve => {
                setTimeout(() => resolve(null), timeoutMs);
            });
            const checkPromise = sat.check()
                .then(() => sat.name)
                .catch(() => null);

            let name = await Promise.race([checkPromise, timeoutPromise]);

            if (name != null) {
                ans.push(name);
            }
        }
        return ans;
    })();

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