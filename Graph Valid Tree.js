class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let fromTo = new Map()
        if (edges.length == 0) {
            return true
        }
        // key->arr[]
        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];
            let l = element[0]
            let r = element[1]

            if (!fromTo.has(l)) {
                fromTo.set(l, [])
            }
            if (!fromTo.has(r)) {
                fromTo.set(r, [])
            }

            let lAr = fromTo.get(l)

            let rAr = fromTo.get(r)

            lAr.push(r)
            rAr.push(l)
        }

        let goodNodes = new Set()
        let visitSet = new Set()
        let NoCycles = true
        let counNodes = 0
        function dfs(i, prevI) {
            if (goodNodes.has(i)) {
                return
            }
            if (visitSet.has(i) && prevI != i) {
                NoCycles = false
                return
            }
            if (!NoCycles) {
                return
            }

            counNodes++
            if (!fromTo.has(i)) {
                goodNodes.add(i)
                return
            }

            let arNode = fromTo.get(i)

            visitSet.add(i)
            for (let j = 0; j < arNode.length; j++) {
                const element = arNode[j];
                if (element != prevI) {
                    dfs(element, i)

                }



            }
            visitSet.delete(i)
            goodNodes.add(i)
        }
        // let a = edges[0][0]
        dfs(edges[0][0])

        if (!NoCycles) {
            return false
        }
        if (counNodes != fromTo.size) {
            return false
        }
        else {
            return true
        }
        let chek = 1

        // TODO: сделать edge 
        // edge=[node1,node2]
        // node1->node2
        // node2->node1


    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()
numCourses = 2, prerequisites = [[0, 1]]

numCourses = 3, prerequisites = [[1, 0]]
numCourses = 3, prerequisites = [[0, 1], [1, 2], [2, 0]]
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
console.log(' ::: ', sol.validTree(n, edges));