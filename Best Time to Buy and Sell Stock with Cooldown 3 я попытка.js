class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let dp = Array.from({ length: prices.length }, v => 0)

        for (let i = 1; i < prices.length; i++) {
            const elI = prices[i];

            for (let j = 0; j < i; j++) {
                const elJ = prices[j];

                let adEl = 0
                if (j > 1) {
                    adEl = dp[j - 2]
                }
                let curVal = elI - elJ + adEl

                dp[i] = Math.max(dp[i], curVal)
            }

        }


        return Math.max(...dp)
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

prices = [1, 3, 4, 0, 4]

// prices = [1, 4, 2]

// prices = [2, 1, 4, 5, 2, 9, 7]

// prices = [1, 4, 2]


// prices = [2, 1, 4, 5, 2, 9, 7]

prices = [6, 1, 3, 2, 4, 7]

// prices = [1, 3, 2, 4]

console.log('::: ', sol.maxProfit(prices)); 