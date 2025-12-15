class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let dp = Array.from({ length: prices.length }, v => 0)

        // dp[0]=0

        let minEl = prices[0]
        let minInd = 0

        let prevVal = prices[0]

        for (let i = 1; i < prices.length; i++) {
            const el = prices[i];

            let curVal = 0
            if (el > minEl) {
                curVal = el - minEl
                if (minInd - 2 > 0) {
                    let prevDp = dp[minInd - 2]
                    curVal += prevDp
                }
            }
            else {
                // тут проблема 

                minEl = el
                minInd = i 
            }

            if (el < prevVal) {

            }

            if (curVal == 0 && dp[i - 1] != 0) {
                dp[i] = dp[i - 1]
            }
            else {
                dp[i] = curVal
            }



        }

        // return dp[dp.length - 1]
        return Math.max(...dp)
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

prices = [1, 3, 4, 0, 4]

prices = [1, 4, 2]

prices = [2, 1, 4, 5, 2, 9, 7]

console.log('::: ', sol.maxProfit(prices)); 