class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 1) { return 1 }
if (nums.length == 0) { return 0 }
        nums = nums.sort((a, b) => a - b)

        let dp = Array.from({ length: nums.length }, x => 1)
        let max = 1
        for (let i = 1; i < nums.length; i++) {
            const element = nums[i];
            if (nums[i] - 1 == nums[i - 1]) {
                dp[i] = dp[i - 1] + 1
                max = max < dp[i] ? dp[i] : max
            }
            else if (nums[i] == nums[i - 1]) {
                dp[i] = dp[i - 1]
            }


        }
        return max
    }
}
// сортировочное решение сам!!
let a = new Solution()
nums = [2, 20, 4, 10, 3, 4, 5]
// a.longestConsecutive(nums)
console.log('a.longestConsecutive(nums)::: ', a.longestConsecutive(nums));