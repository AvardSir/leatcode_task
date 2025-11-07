class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let minH = new MinPriorityQueue((v) => v[1])
        // [i,time]
        // сортируем по time

        let fromTo = new Map()
        for (let i = 0; i < times.length; i++) {
            const element = times[i];
            // times[i] = (ui, vi, ti).
            let from = element[0]
            let to = element[1]
            let time = element[2]
            if (!fromTo.has(from)) {
                fromTo.set(from, [])
            }
            let curAr = fromTo.get(from)
            let elToAdd = [to, time]
            curAr.push(elToAdd)

        }

        // let queue = [[k, 0]]
        let maxTime = 0

        minH.push([k, 0])
        let visitSet = new Set()
        while (minH.size()) {
            let curNode = minH.pop()
            let curI = curNode[0]
            let curTime = curNode[1]
            if (visitSet.has(curI)) {
                continue
            }

            maxTime = Math.max(maxTime, curTime)
            visitSet.add(curI)
            if (!fromTo.has(curI)) {
                continue
            }
            let curChildAr = fromTo.get(curI)
            for (let i = 0; i < curChildAr.length; i++) {
                let element = curChildAr[i];
                let nextI = element[0]
                let timeCurEl = element[1]
                element = [nextI, timeCurEl + curTime]
                minH.push(element)

            }


        }

        if (visitSet.size != n) {
            return -1
        }
        return maxTime

        let chhck = 1

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

// times = [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]], n = 4, k = 1

// times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2

times = [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]]
n = 4
k = 1

console.log(' ::: ', sol.networkDelayTime(times, n, k));