class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // TODO; способ перспективный но лажа что если связь компонентов после то ломается
        let setVis = new Set()
        let count = n

        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];
            let l = element[0]
            let r = element[1]

            if (setVis.has(l) && setVis.has(r)) {

            }
            else {
                count--
                setVis.add(l)
                setVis.add(r)
            }

        }

        return count
    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()


n = 3
edges = [[0, 1], [0, 2]]

console.log(' ::: ', sol.countComponents(n, edges));