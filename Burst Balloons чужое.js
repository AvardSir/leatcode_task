class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {

        nums.unshift(1)
        nums.push(1)

        let dp = Array.from({ length: nums.length }, v => Array.from({ length: nums.length }, v => -Infinity))
        function dfs(l, r) {
            if (l > r || r < l) {
                return 0
            }
            if (dp[l][r] != -Infinity) {
                return dp[l][r]
            }
            // return nums[l - 1] * nums[i] * nums[r + 1] + dfs(l, r)
            let maxCount = -Infinity
            for (let i = l; i <= r; i++) {
                const element = nums[i];
                if (element == 2) {
                    let htht = 1
                }
                let curVal = nums[l - 1] * nums[i] * nums[r + 1]
                let leftDfs = dfs(l, i - 1)
                let rightDfs = dfs(i + 1, r)

                let curCount = curVal + leftDfs + rightDfs

                maxCount = Math.max(maxCount, curCount)


            }
            dp[l][r] = maxCount
            return maxCount

            // let tp=1            

        }

        return dfs(1, nums.length - 2)
        let hehe2424 = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

s = "caaat", t = "cat"

s = "rabbbit"
t = "rabbit"
// s = "xxyxy", t = "xy"
nums = [4, 2, 3, 7]

// nums = [1, 2, 3, 4]
// nums = [2, 3, 4, 5]


console.log('::: ', sol.maxCoins(nums)); 