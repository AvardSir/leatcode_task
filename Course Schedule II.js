class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let FromTo = new Map()
        for (let i = 0; i < prerequisites.length; i++) {
            const element = prerequisites[i];
            let l = element[0]
            let r = element[1]

            let curAr
            if (!FromTo.has(l)) {



                FromTo.set(l, [])
            }
            curAr = FromTo.get(l)
            curAr.push(r)
            // TODO: тут не доделана 
            // TODOL: проблема на листке
            // FromTo.set(l, r)

        }


        let check = 1
        let isOk = true

        let goodISet = new Set()
        function dfs(i, memoSet) {
            if (goodISet.has(i)) {
                return
            }
            if (!isOk) {
                return
            }

            if (memoSet.has(i)) {
                isOk = false
                return
            }

            if (!FromTo.has(i)) {
                goodISet.add(i)
                return
            }
            memoSet.add(i)
            let curArOfI = FromTo.get(i)
            for (let j = 0; j < curArOfI.length; j++) {
                const curI = curArOfI[j];

                dfs(curI, memoSet)
                if (!isOk) {
                    return
                }

                // element??

            }
            goodISet.add(i)
            memoSet.delete(i)

        }
        for (let i = 0; i < numCourses; i++) {
            // const element = array[i];

            if (FromTo.has(i)) {
                let memoSet = new Set()
                dfs(i, memoSet)
            }
            if (!isOk) {
                return isOk
            }

        }

        return isOk
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


console.log(' ::: ', sol.canFinish(numCourses, prerequisites));