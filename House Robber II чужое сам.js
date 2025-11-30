class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length < 4) {
            return Math.max(...nums)
        }
        let firsEl = nums[0]
        let lastEl = nums.pop()

        let a = 0
        let b = 0
        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            let newEl = Math.max(a + el, b)

            a = b
            b = newEl


        }

        let firsMax = b

        nums.push(lastEl)
        nums.shift()

        a = 0
        b = 0
        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            let newEl = Math.max(a + el, b)

            a = b
            b = newEl


        }
        let SecondMax = b


        return Math.max(SecondMax, firsMax)

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

nums = [2, 9, 8, 3, 6]
nums = [2, 9, 8, 3, 6]

console.log(' ::: ', sol.rob(nums));