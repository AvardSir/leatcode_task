class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = 1
        let min = 1

        let mostMax = -Infinity


        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            if (el == 0) {
                mostMax = Math.max(max, mostMax, el)
                max = 1
                min = 1
                continue
            }


            let curMax = max * el
            let curMin = min * el

            max = Math.max(curMax, curMin, el)
            mostMax = Math.max(max, mostMax, el)
            min = Math.min(curMax, curMin, el)


        }
        if (max == 1) {
            return Math.max(...nums)
        }

        return max > mostMax ? max : mostMax
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
console.log(' ::: ', sol.maxProduct(nums));