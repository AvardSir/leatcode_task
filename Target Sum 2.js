class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        function sum(ar) {
            let s = 0
            for (let i = 0; i < ar.length; i++) {
                const element = ar[i];
                s += element

            }
            return s
        }
        let totalSum = sum(nums)

        let targetSum = totalSum - target
        if (targetSum == 0) {
            return 1
        }
        if (targetSum < 0) {
            return 0
        }
        let dp = Array.from({ length: nums.length }, v => [])

        let ans = 0

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            // if (num == targetSum) {
            //     ans++
            //     continue
            // }
            // if (num > targetSum) {
            //     continue
            // }
            dp[i].push(num)
            let chhek = 1
            for (let j = 0; j < i; j++) {
                const elJ = nums[j];

                let curDp = dp[j]
                for (let z = 0; z < curDp.length; z++) {
                    const curDpEl = curDp[z];

                    let curTestVal = curDpEl + num

                    if (curTestVal > target) {
                        continue
                    }
                    if (curTestVal == target) {
                        ans++
                        
                    }
                    dp[i].push(curTestVal)
                }

            }


        }

        return ans
        let hehel = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

nums = [2, 2, 2], target = 2

nums = [2, 2, 2], target = 4

nums[1, 2, 3, 6], target = 0

nums = [1, 1, 1, 1, 1]
target = 3


// nums = [1, 2, 3]
// target = 6




console.log('::: ', sol.findTargetSumWays(nums, target)); 