class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {

        // 1
        // let first = points[0]
        // function findShortes(i) {
        //     let min = Infinity
        //     let minI
        //     for (let j = 0; j < points.length; j++) {
        //         const element = points[j];
        //         let x = element[0]
        //         let y = element[1]
        //         let curDist = x + y
        //         // min = Math.min(curDist, min)
        //         if (curDist < min && !visitSet.has(j)) {
        //             min = curDist
        //             minI = j
        //         }

        //     }
        //     return [minI, min]
        // }

        // 

        let visitSet = new Set()

        let minH = new MinPriorityQueue((v) => v[1])
        // [i,dist?]
        minH.push([0, 0])
        let range = 0
        while (minH.size()) {
            let curNode = minH.pop()
            let curI = curNode[0]

            if (visitSet.has(curI)) {
                continue
            }
            let dist = curNode[1]
            range += dist
            let curPoint = points[curI]

            let curX = curPoint[0]
            let curY = curPoint[1]

            visitSet.add(curI)
            for (let j = 0; j < points.length; j++) {
                if (!visitSet.has(j)) {
                    const element = points[j];
                    let x = element[0]
                    let y = element[1]
                    let curDist = Math.abs(x - curX) + Math.abs(y - curY)

                    // let el = [i, curDist]
                    let el = [j, curDist]
                    minH.push(el)

                }
            }
        }
        return range
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



console.log(' ::: ', sol.minCostConnectPoints(points));