class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let memo = new Map()
        memo.set(0, nums[0])
        memo.set(1, nums[1])

        memo.set(2, nums[2] + nums[0])

        // if (nums.length < 4) {
        //     Math.max(dfs(nums.length - 1), dfs(nums.length - 2))
        //     return memo.get(nums.length - 1)
        // }
        function dfs(i) {
            if (i < 0) {
                return nums[0]
            }
            if (memo.has(i)) {
                return memo.get(i)
            }
            let left = dfs(i - 3)
            let right = dfs(i - 2)
            let max = Math.max(left, right)

            let ans = max + nums[i]

            memo.set(i, ans)
            return ans
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
nums = [1, 1, 3, 3]
nums = [1, 2, 3, 1]
nums = [0]
console.log(' ::: ', sol.rob(nums));