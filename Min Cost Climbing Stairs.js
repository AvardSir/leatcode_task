class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        let memo = new Map()
        memo.set(0, 0)
        memo.set(1, 0)
        function dfs(i) {
            if (memo.has(i)) {
                return memo.get(i)
            }
            let l = dfs(i - 1) + cost[i - 1]
            
            // memo.set(i - 1, l)
            let r  = dfs(i - 2) + cost[i - 2]
            let minVal = Math.min(l, r)
            // memo.set(i, minVal)
            return minVal
        }


        // let l = dfs(0)
        // let r = dfs(1)
        return dfs(cost.length)

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

n = 3
cost = [1, 2, 3]

console.log(' ::: ', sol.minCostClimbingStairs(cost));