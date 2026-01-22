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

    let path = []
    let firstEL = [from, path]
    let queque = [firstEL]
    let visited = new Set()
    let quequePromises = []
    // quequePromises.push('firsInput')
    let paths = []
    while (true) {
        let united = []
        let quequePromises = []
        let paths = []
        while (queque.length) {
            // let node = queque.shift()

            let [point, path] = queque.shift()
            if (visited.has(point)) {
                continue
            }

            if (point == to) {
                path.push(point)
                return path
            }

            visited.add(point)
            // path.push(point)
            quequePromises.push([[...path, point], fetchFlights(point)])
            // paths.push([...path, point])


        }

        let nodes = await Promise.all(quequePromises[1])

        for (let i = 0; i < nodes.length; i++) {
            const ArPoints = nodes[i];

            for (let j = 0; j < ArPoints.length; j++) {
                const point = ArPoints[j];
                // todo оптмизировать по памяти
                if (!visited.has(point)) {
                    united.push([point, paths[i]])
                }

            }

        }

        if (united.length == 0) {
            return []
        }
        queque = united


    }

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