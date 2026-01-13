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
            return new Promise((resolve, reject) => {
                resolve(sat.name)
            })
        }

        async function racers() {
            const name = await Promise.race([timer(timeoutMs), checkThis(sat)]);
            if (name != null) {
                ans.push(name);
            }
        }
        racers()


    }
    return ans
}
module.exports = getAvailableSatellites;

let satellites = [
    {
        name: "Первый",
        check: () => { Promise }
    },
    {
        name: "Второй",
        check: () => { Promise }
    }
]

// getAvailableSatellites(satellites, timeoutMs = 3000)
console.log('', getAvailableSatellites(satellites, 3000));