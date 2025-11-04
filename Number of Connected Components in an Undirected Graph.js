class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let fromTO = new Map()

        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];
            let l = element[0]
            let r = element[1]

            if (!fromTO.has(l)) {
                fromTO.set(l, [])
            }

            if (!fromTO.has(r)) {
                fromTO.set(r, [])
            }

            let rAr = fromTO.get(r)
            let lAr = fromTO.get(l)

            rAr.push(l)
            lAr.push(r)

        }
        let visitedSet = new Set()

        function dfs(i, prevI) {
            if (visitedSet.has(i)) {
                return
            }

            visitedSet.add(i)

            if (!fromTO.has(i)) {
                return
            }
            let curAr = fromTO.get(i)

            for (let j = 0; j < curAr.length; j++) {
                const element = curAr[j];
                dfs(element, i)
            }


        }

        let arFromTo = Array.from(fromTO)
        // for (let i = 0; i < arFromTo.length; i++) {
        //     const element = arFromTo[i][0];
        //     if (!visitedSet.has(element)) {
        //         dfs
        //     }

        // }

        let ans = 0
        for (let i = 0; i < n; i++) {
            // const element = array[i];
            if (!visitedSet.has(i)) {
                ans++
                dfs(i)
            }
        }

        return ans
        let chek = 1
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

n = 3
edges = [[0, 1], [0, 2]]

console.log(' ::: ', sol.countComponents(n, edges));