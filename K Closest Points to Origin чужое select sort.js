class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        function poinToDist(point) {
            let [x, y] = point
            let dist = x ** 2 + y ** 2
            return dist
        }
        let distToPoint = new Map()
        let distanseS = []
        for (let i = 0; i < points.length; i++) {
            const element = points[i];
            let curDist = poinToDist(element)
            distanseS.push(curDist)

            if (!distToPoint.has(curDist)) {
                distToPoint.set(curDist, [element])

            }
            else {
                distToPoint.get(curDist).push(element)
            }



        }


        // TODO: ОТЛАДКА
        // distanseS = [1, 3, 4, 2]


        let len = distanseS.length

        // let k_indx = (len - 1) - (k - 1)
        let k_indx = k - 1


        let start = 0
        let end = distanseS.length - 1

        while (true) {

            let i = start, j = start
            let pivot = distanseS[end]

            while (true) {
                let el_i = distanseS[i]
                let el_j = distanseS[j]
                if (j == end) {
                    // меняем j и pivot 
                    [distanseS[i], distanseS[end]] = [distanseS[end], distanseS[i]]
                    break
                }
                if (el_j <= pivot) {
                    // [i, j] = []
                    [distanseS[i], distanseS[j]] = [distanseS[j], distanseS[i]]
                    // меняем iй и jй элемет местами

                    // i++
                    i++
                }

                j++

            }

            if (i == k_indx) {
                let ans = []
                for (let z = 0; z < k; z++) {
                    let arrPoint = distToPoint.get(distanseS[z])
                    let point = arrPoint.pop()
                    // const element =
                    ans.push(point)
                }
                return ans
            }
            else if (i < k_indx) {
                start = i + 1
            }
            else {
                end = i - 1
            }

        }


        let pas1 = 1

    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let a = new Solution()

// базовый
points = [[0, 2], [2, 2]], k = 1

// 4 18 8
points = [[0, 2], [3, 3], [2, 2]], k = 1

points = [[0, 2], [2, 0], [2, 2]]
k = 2

points = [[6, 10], [-3, 3], [-2, 5], [0, 2]]
k = 3

// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.kClosest(points, k));