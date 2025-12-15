class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let dp = Array.from({ length: prices.length }, v => 0)
        let minVal = prices[0]
        let minInd = 0

        let prev = prices[0]

        for (let i = 1; i < prices.length; i++) {
            if (i == 5) {
                let chekekle = 1
            }
            const el = prices[i];
            let curSel = 0

            let adVal = 0
            if (minInd >= 2) {
                // minInd >= 2 ? dp[minInd - 2] : 0

                adVal = dp[minInd - 2]
            }


            curSel = el - minVal + adVal
            if (curSel < 0) {
                curSel = 0
            }

            if (el >= prev) {
                // curSel = el - minVal + minInd >= 2 ? dp[minInd - 2] : 0
                // pass
            }
            else {
                // el <minval
                minVal = el
                minInd = i

            }

            dp[i] = curSel

            prev = el

        }

        // return dp[dp.length - 1]
        return Math.max(...dp)
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

prices = [1, 3, 4, 0, 4]

// prices = [1, 4, 2]

prices = [2, 1, 4, 5, 2, 9, 7]

prices = [1, 4, 2]


prices = [2, 1, 4, 5, 2, 9, 7]

prices = [6, 1, 3, 2, 4, 7]

prices = [1, 3, 2, 4]

console.log('::: ', sol.maxProfit(prices)); 