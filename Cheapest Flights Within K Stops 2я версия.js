class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let fromTo = new Map()
        for (let i = 0; i < flights.length; i++) {
            const element = flights[i];
            let from = element[0]
            fromTo.set(from, [])

        }
        for (let i = 0; i < flights.length; i++) {
            const element = flights[i];
            let from = element[0]
            let to = element[1]
            let cost = element[2]

            let curAr = fromTo.get(from)
            curAr.push([to, cost])

            // from_i, to_i, price_i


        }
        // k = k + 1

        let vivistSet = new Set()

        let minCost = Infinity
        function dfs(i, curK, CurCost) {

            if (vivistSet.has(i)) {
                return
            }
            if (curK == k + 2) {
                return
            }
            if (i == dst) {
                minCost = Math.min(minCost, CurCost)
            }
            if (!fromTo.has(i)) {
                return
            }
            vivistSet.add(i)

            let childAr = fromTo.get(i)
            for (let j = 0; j < childAr.length; j++) {
                const element = childAr[j];
                // to ,cost?
                let to = element[0]
                let cost = element[1]

                dfs(to, curK + 1, cost + CurCost)


            }
            vivistSet.delete(i)

        }
        dfs(src, 0, 0)
        if (minCost == Infinity) {
            return -1
        }
        return minCost

        let chek = 1
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

// times = [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]], n = 4, k = 1

// times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2

times = [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]]
n = 4
k = 1

points = [[0, 0], [2, 2], [3, 3], [2, 4], [4, 2]]


n = 4, flights = [[0, 1, 200], [1, 2, 100], [1, 3, 300], [2, 3, 100]], src = 0, dst = 3, k = 1


n = 5
flights = [[0, 1, 5], [1, 2, 5], [0, 3, 2], [3, 1, 2], [1, 4, 1], [4, 2, 1]]
src = 0
dst = 2
k = 2


n = 4
flights = [[0, 1, 200], [1, 2, 100], [1, 3, 300], [2, 3, 100]]
src = 0
dst = 3
k = 1
console.log(' ::: ', sol.findCheapestPrice(n, flights, src, dst, k));