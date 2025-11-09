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

        // let fromTo = Array.from({ length: n }, v => [])
        // for (let i = 0; i < flights.length; i++) {
        //     let [from_i, to_i, price_i] = flights[i];
        //     // fromTo[from_i][to_i] = price_i
        //     fromTo[from_i].push([to_i, price_i])

        // }

        // let srcToDstForK = Array.from({ length: n }, v => Array.from({ length: k + 2 }, v => Infinity))
        // for (let j = 0; j < srcToDstForK[0].length; j++) {
        //     srcToDstForK[0][j] = 0
        // }
        // srcToDstForK[src][0] = 0
        // let minH = new MinPriorityQueue((v) => v[1])
        // // [to,cost,k]
        // minH.push([src, 0, 0])

        // // k += 1

        let prices = Array.from({ length: n }, v => Infinity)
        prices[src] = 0
        for (let i = 0; i <= k; i++) {
            let tempPrices = [...prices]
            for (let j = 0; j < flights.length; j++) {
                let [from_i, to_i, price_i] = flights[j]
                if (tempPrices[from_i] == Infinity) {
                    continue
                }
                if (prices[from_i] + price_i < tempPrices[to_i]) {
                    tempPrices[to_i] = prices[from_i] + price_i
                }

            }
            // гдето тут
            prices = tempPrices

        }

        // пойми смысл

        return prices[dst] == Infinity ? -1 : prices[dst]


        return -1
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
n = 3, flights = [[1, 0, 100], [1, 2, 200], [0, 2, 100]], src = 1, dst = 2, k = 1

n = 4, flights = [[0, 1, 200], [1, 2, 100], [1, 3, 300], [2, 3, 100]], src = 0, dst = 3, k = 1

// n = 3
// flights = [[1, 0, 100], [1, 2, 200], [0, 2, 100]]
// src = 1
// dst = 2
// k = 1

// n = 2
// flights = [[1, 0, 5]]
// src = 0
// dst = 1
// k = 1

// n = 10
// flights = [[3, 4, 4], [2, 5, 6], [4, 7, 10], [9, 6, 5], [7, 4, 4], [6, 2, 10], [6, 8, 6], [7, 9, 4], [1, 5, 4], [1, 0, 4], [9, 7, 3], [7, 0, 5], [6, 5, 8], [1, 7, 6], [4, 0, 9], [5, 9, 1], [8, 7, 3], [1, 2, 6], [4, 1, 5], [5, 2, 4], [1, 9, 1], [7, 8, 10], [0, 4, 2], [7, 2, 8]]
// src = 6
// dst = 0
// k = 7

n = 4
flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]]
src = 0
dst = 3
k = 1

console.log(' ::: ', sol.findCheapestPrice(n, flights, src, dst, k));