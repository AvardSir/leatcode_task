class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let memo = new Map()
        memo.set(0, nums[0])
        memo.set(1, nums[1])
        memo.set(2, nums[2]+nums[0])
        function dfs(i) {
            if (memo.has(i)) {
                return memo.get(i)
            }

            let l = dfs(i - 2)
            let r = dfs(i - 3)

            let maxVal = Math.max(l, r)

            let total = maxVal + nums[i]
            memo.set(i, total)
            return total
        }


        return Math.max(dfs(nums.length - 1), dfs(nums.length - 2))
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

n = 3
cost = [1, 2, 3]
nums = [1, 1, 3, 3]
nums = [1, 1, 3, 3]
nums = [2, 9, 8, 3, 6]

console.log(' ::: ', sol.rob(nums));