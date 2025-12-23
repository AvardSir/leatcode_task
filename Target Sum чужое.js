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
        let sumAr = sum(nums)
        let needJlen = sumAr * 2 + 1

        let dp = Array.from({ length: nums.length }, v => Array.from({ length: needJlen }, v => '_'))

        let len = dp[0].length
        // let len = 3 + 3 + 1
        let mid = Math.floor(len / 2)
        let lMid = mid - nums[0]
        let rMid = mid + nums[0]
        if (dp[0][lMid] == '_') {
            dp[0][lMid] = 0
        }
        dp[0][lMid]++
        if (dp[0][rMid] == '_') {
            dp[0][rMid] = 0
        }
        dp[0][rMid]++
        let e2hehl = 1
        function addPoint(i, j) {
            let nextI = i + 1

            let nextNum = nums[nextI]

            let L = j - nextNum
            let R = j + nextNum

            if (nextI > nums.length - 1) {
                return
            }
            if (L >= 0) {
                if (dp[nextI][L] == '_') {
                    dp[nextI][L] = 0
                }
                dp[nextI][L] += dp[i][j]
            }

            if (R <= needJlen - 1) {
                if (dp[nextI][R] == '_') {
                    dp[nextI][R] = 0
                }
                dp[nextI][R] += + dp[i][j]
            }


            return

        }
        // addPoint(0, 0)
        // dp
        let ehehl = 1
        for (let i = 0; i < dp.length; i++) {
            const cur = dp[i];
            if (i == 8) {
                let hehel = 1
            }

            for (let j = 0; j < cur.length; j++) {
                const curElDp = cur[j];
                if (curElDp == '_') {
                    continue
                }

                addPoint(i, j)

                let ehhe = 1

            }

        }

        // target
        // target = Math.abs(target)

        target = mid + target

        if (target > dp[0].length - 1 || target < 0) {
            return 0
        }

        return dp[dp.length - 1][target] != '_' ? dp[dp.length - 1][target] : 0

        let dpdpep1 = 1
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

nums = [2, 2, 2], target = 2

nums = [2, 2, 2], target = 4

nums = [1]
target = 2

nums = [0, 1]
target = 1

nums = [2, 2, 2]
target = 2

console.log('::: ', sol.findTargetSumWays(nums, target)); 