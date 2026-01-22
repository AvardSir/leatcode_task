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
    let quequePromises = []
    // quequePromises.push('firsInput')
    let paths = []
    function strTOar(str) {
        let ar = str.split('.')
        return ar
    }

    
    while (queque.length) {
        // let node = queque.shift()

        let [point, path] = queque.shift()

        // if (visited.has(point)) {
        //     continue
        // }

        if (point == to) {
            // path.push(point)

            path += point
            return strTOar(path)
        }

        visited.add(point)

        let arTo = await fetchFlights(point)
        if (!arTo) {
            continue
        }
        for (const curTo of arTo) {
            if (!visited.has(curTo)) {
                queque.push([curTo, path + point + '.'])
            }

        }
        // paths.push([...path, point])


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