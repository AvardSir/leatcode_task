function getAvailableSatellites(satellites, timeoutMs = 3000) {

    async function checkWithTimeout(sat) {
        try {
            const res = await Promise.race([
                sat.check(),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("timeout")), timeoutMs)
                ),
            ]);
            return res ? sat.name : null;
        } catch {
            return null;
        }
    }

    let promises = []
    for (let i = 0; i < satellites.length; i++) {
        const sat = satellites[i];
        promises.push(checkWithTimeout(sat))
    }
    function wate(prom) {

    }

    async function waitProm(prom) {
        let lolData
        let p2 = await prom.then((data) => lolData = data)
        return lolData
    }
    let ans = Promise.all(promises).then((results) => results.filter((v) => v != null))
    async function wait() {
        return await ans
    }
    ans = async (ans) => {
        return await ans
    }

    (async () => {
        let ans = Promise.all(promises)
            .then((results) => results.filter((v) => v != null));

        let results = await ans;
        return results
        // console.log(results);
        // Работаем с результатами
    })();

    return wait()
    ans = waitProm(ans)
    let results
    ans.then((res) => {
        results = res


        async (results) => {
            return await results
        }
        return results
        // return results
        let htht = 1
    }
    )
    let htht = 1
    // return ans
}

// module.exports = getAvailableSatellites;

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

console.log('getAvailableSatellites(satellites, 3000)::: ', getAvailableSatellites(satellites, 3000));
// debugger
// getAvailableSatellites(satellites, 3000)

//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error("Ошибка:", err);
//     });