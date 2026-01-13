function getAvailableSatellites(satellites, timeoutMs = 3000) {
    // Ваш код
    async function checkSat(sat) {
        function SetTime() {
            setTimeout(() => {
                reject()
            }, timeoutMs);
        }


        try {
            await Promise.race([sat.check, SetTime])

            return sat.name
        } catch (error) {
            return null
        }



    }
    let promises = []
    for (let i = 0; i < satellites.length; i++) {
        const sat = satellites[i];
        promises.push(checkSat(sat))
    }

    let ans = Promise.all(promises).then((names) => {

        let corectNames = []
        for (let j = 0; j < names.length; j++) {
            const name = names[j];
            if (name != null) {
                corectNames.push(name)
            }

        }
        return corectNames
    })
    return ans

    // return new Promise((resolve, reject) => { })

}

module.exports = getAvailableSatellites;


const satellites = [
    {
        name: "Первый",
        check: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    },
    {
        name: "Второй",
        check: () =>
            new Promise((resolve) => setTimeout(() => resolve("Второй"), 100)),
    },
    {
        name: "Третий",
        check: () =>
            new Promise((resolve) => setTimeout(() => resolve("Третий"), 4000)),
    },
    {
        name: "Четвертый",
        check: () => Promise.reject(new Error("ошибка")),
    },
];

// console.log('getAvailableSatellites(satellites, 3000)::: ', getAvailableSatellites(satellites, 3000));
// debugger
getAvailableSatellites(satellites, 3000).then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.error("Ошибка:", err);
    });