class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        let maxSub = -Infinity


        let curSub = 1

        let preSub = 1

        for (let i = 0; i < nums.length; i = i + 1) {
            const el = nums[i];
            if (el == 0) {
                curSub = 1
                preSub = 1

                continue
            }


            curSub *= el
            if (el < 0) {
                if (preSub > 0) {
                    preSub = curSub

                    curSub = 1
                    continue
                }
                else {
                    curSub = preSub * curSub
                    preSub = 1
                }

            }
            maxSub = Math.max(maxSub, curSub,)
        }
        // обратный 

        curSub = 1

        preSub = 1
        for (let i = nums.length - 1; i > 0; i = i - 1) {
            const el = nums[i];
            if (el == 0) {
                curSub = 1
                preSub = 1

                continue
            }


            curSub *= el
            if (el < 0) {
                if (preSub > 0) {
                    preSub = curSub

                    curSub = 1
                    continue
                }
                else {
                    curSub = preSub * curSub
                    preSub = 1
                }

            }
            maxSub = Math.max(maxSub, curSub,)
        }

        if (maxSub == -Infinity) {
            return Math.max(...nums)
        }




        return maxSub
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


coins = [1, 5, 10], amount = 12
nums = [1, 2, -3, 4]

nums = [-2, 0, -1]

// nums = [-3, -1, -1]
// nums = [-1, -1]

nums = [-4, 1, -3, 1, -2, 10]
console.log(' ::: ', sol.maxProduct(nums));