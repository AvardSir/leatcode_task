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

    let toFrom = new Map()

    // toFrom.set(from, null)

    let prevNode = null

    let head = 0
    let queque = [[from, prevNode]]
    while (head < queque.length) {
        let [curNode, prevNode] = queque[head]

        if (curNode == to) {
            toFrom.set(curNode, prevNode)
            let path = []
            let node = curNode
            while (node != null) {
                path.push(node)
                node = toFrom.get(node)
            }
            return path.reverse()

        }
        if (!toFrom.has(curNode)) {

            toFrom.set(curNode, prevNode)
            let arTo = await fetchFlights(curNode)
            if (!arTo) {
                continue
            }
            for (let i = 0; i < arTo.length; i++) {
                const to = arTo[i];
                queque.push([to, curNode])
            }
        }
        head++
    }
    return []
    // Ваше решение
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