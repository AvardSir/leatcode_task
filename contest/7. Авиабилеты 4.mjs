/**
 * Для тестирования можно пользоваться моком функции fetchFlights
 * 
 * ```
 * const FLIGHTS = {
 *  A: ['B', 'D'],
 *  B: ['C', 'N', 'Z'],
 *  D: ['E', 'F'],
 *  F: ['S']
 * };
 * 
 * const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);
 * ```
 */

export async function findPath(from, to, fetchFlights) {
    // Ваше решение

    let path = ''
    let firstEL = [from, path]
    let queque = [firstEL]
    let visited = new Set()

    function strTOar(str) {
        let ar = str.split('.')
        return ar
    }

    while (true) {

        let quequePromises = []
        let paths = []

        while (queque.length) {
            // let node = queque.shift()

            let [point, path] = queque.shift()

            if (visited.has(point)) {
                continue
            }

            if (point == to) {

                path += point
                return strTOar(path)
            }

            visited.add(point)

            quequePromises.push(fetchFlights(point))

            paths.push(path + point + '.')
        }

        let nodesAr = await Promise.all(quequePromises)

        for (let i = 0; i < nodesAr.length; i++) {
            const ArPaths = nodesAr[i];
            for (let j = 0; j < ArPaths.length; j++) {
                const curTo = ArPaths[j];
                if (!visited.has(curTo)) {
                    queque.push([curTo, paths[i]])
                }

            }

        }
        if (queque.length == 0) {
            return []
        }

        // queque.push([curTo, path + point + '.'])


    }
    return []


}

let data = {
    "from": "A",
    "to": "N",
    "flights": {
        "A": [
            "B",
            "D"
        ],
        "B": [
            "C",
            "N",
            "Z"
        ],
        "D": [
            "E",
            "F"
        ],
        "F": [
            "S"
        ]
    }
}

const FLIGHTS = {
    A: ['B', 'D'],
    B: ['C', 'N', 'Z'],
    D: ['E', 'F'],
    F: ['S']
};

const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);

let from = data['from']
let to = data['to']
// let fetchFlights = data['flights']

console.log('::: ', findPath(from, to, fetchFlights));