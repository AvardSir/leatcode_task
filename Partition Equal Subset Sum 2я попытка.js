class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let dp = Array.from({ length: nums.length }, v => [])

        let alSum = 0
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            alSum += element
        }
        if (alSum % 2 != 0) {
            return false
        }
        let target = alSum / 2

        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            if (el == target) {
                return true
            }
            dp[i].push(el)

            for (let j = 0; j < i; j++) {
                // const element = nums[j];

                for (let z = 0; z < dp[j].length; z++) {
                    const elZ = dp[j][z];

                    let newToAdToDp = elZ + el
                    if (newToAdToDp == target) {
                        return true
                    }
                    dp[i].push(newToAdToDp)

                }

            }

        }

        return false

    }
}





const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


nums = [1, 2, 3, 4, 5]

nums = [3, 3, 3, 4, 5]
console.log(' ::: ', sol.canPartition(nums));