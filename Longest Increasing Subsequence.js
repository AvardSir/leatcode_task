class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        let dp = Array.from({ length: nums.length }, v => 0)

        // let mostMax = -Infinity
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            for (let j = 0; j < i; j++) {
                const prevNum = nums[j];
                if (prevNum < num) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)

                }
            }

        }
        return Math.max(...dp) + 1

    }
}





const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


coins = [1, 5, 10], amount = 12
nums = [1, 2, -3, 4]

nums = [-2, 0, -1]

// nums = [-3, -1, -1]
// nums = [-1, -1]

// nums = [-4, 1, -3, 1, -2, 10]

nums = [2, 3, -2, 4]

nums = [0]
nums = [-3, -1, -1]
s = "applepenapple", wordDict = ["apple", "pen", "ape"]

// s = "catsincars"
// wordDict = ["cats", "cat", "sin", "in", "car"]

nums = [9, 1, 4, 2, 3, 3, 7]
nums = [0, 3, 1, 3, 2, 3]



console.log(' ::: ', sol.lengthOfLIS(nums));