class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        // let memo = new Set()
        // memo.set(0, [nums[0], true])
        // memo.set(1, [nums[1], false])
        // // memo.set(2, [nums[1], false])
        // function dfs(i, isUseFirst) {
        //     if (memo.has(i)) {
        //         return memo.get(i)
        //     }


        //     let l = dfs(i - 2) + nums[i]
        // }

        let dp = Array.from({ length: nums.length })
        dp[0] = [nums[0], true]
        dp[1] = [nums[1], false]
        dp[2] = [nums[0] + nums[2], true]
        for (let i = 3; i < nums.length; i++) {
            const element = nums[i];
            let [lval, isUseL] = dp[i - 2]
            let [rval, isUseR] = dp[i - 3]
            if (lval > rval) {
                dp[i] = [lval + nums[i], isUseL]
            }
            else if (lval == rval) {
                if (!isUseL) {
                    dp[i] = [lval + nums[i], isUseL]
                }
                else if (!isUseR) {
                    dp[i] = [rval + nums[i], isUseR]
                }
                else {
                    dp[i] = [lval + nums[i], isUseL]
                }
            }
            else {
                // lval < rval
                dp[i] = [rval + nums[i], isUseR]
            }

            // dp[i] = Math.max(dp[i - 2], dp[i - 3])

        }


        let [lval, isUseL] = dp[dp.length - 1]
        let [prelastval, isUsPrelas] = dp[dp.length - 2]
        if (!isUseL) {

            return Math.max(lval, prelastval)
        }
        else {

            let i = nums.length - 1
            let minusThre = dp[i - 2]

            return Math.max(lval - nums[nums.length - 1], lval - nums[0], prelastval)
        }

        let chek = 1

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

n = 3
cost = [1, 2, 3]
nums = [1, 1, 3, 3]
nums = [1, 1, 3, 3]
nums = [2, 9, 8, 3, 6]
nums = [3, 4, 3]

nums = [2, 9, 8, 3, 6]

console.log(' ::: ', sol.rob(nums));