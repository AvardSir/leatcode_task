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
                let element = ar[i];
                element = Math.abs(element)
                s += element

            }
            return s
        }

        let totalSum = sum(nums)
        target = Math.abs(target)

        let needToDestroy = totalSum - target
        // if (needToDestroy == 0) {
        //     return 1
        // }
        if (needToDestroy < 0) {
            return 0
        }

        if (needToDestroy % 2 != 0) {
            return 0
        }

        let whatWeNedTofind = target + needToDestroy / 2

        let hhehel = 1
        let dp = Array.from({ length: nums.length }, v => [])

        let ans = 0

        for (let i = 0; i < nums.length; i++) {
            if (i == 3) {
                let ehehl = 1
            }
            let num = nums[i];

            dp[i].push(num)
            if (num == whatWeNedTofind) {
                ans++

            }
            let chhek = 1
            for (let j = 0; j < i; j++) {
                // let elJ = nums[j];

                let curDp = dp[j]
                for (let z = 0; z < curDp.length; z++) {
                    const curDpEl = curDp[z];

                    let curTestVal = curDpEl + num

                    if (curTestVal > whatWeNedTofind) {
                        continue
                    }
                    if (curTestVal == whatWeNedTofind) {
                        ans++

                    }
                    dp[i].push(curTestVal)
                }

            }


        }

        function isItMinusAll() {
            let sum = 0
            for (let i = 0; i < nums.length; i++) {
                const element = nums[i];
                sum += -element
            }
            if (sum == target) {
                ans++
            }
        }
        isItMinusAll()

        return ans
        let hehel = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

nums = [2, 2, 2], target = 2

nums = [2, 2, 2], target = 4

// nums = [1, 2, 3, 6], target = 0

nums = [1, 1, 1, 1, 1]
target = 3


// nums = [1, 2, 3]
// target = 6



// nums = [2, 2, 2], target = 2


nums = [1, 0]
target = 1


// nums = [1000]
// target = -1000

nums = [0, 0, 0, 0, 0, 0, 0, 0, 1]
target = 1

nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
target = 0

console.log('::: ', sol.findTargetSumWays(nums, target)); 