class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let memo = new Map()
        memo.set(1, 1)
        memo.set(2, 2)
        memo.set(0, 1)
        function dfs(n) {
            if (memo.has(n)) {
                return memo.get(n)
            }

            return dfs(n - 1) + dfs(n - 2)
        }
        return dfs(n)
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

n = 3 

console.log(' ::: ', sol.climbStairs(n));