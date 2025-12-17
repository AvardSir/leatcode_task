class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let dp = Array.from({ length: prices.length + 2 }, v => [0, 0])

        for (let i = prices.length - 1; i >= 0; i--) {
            // const element = prices[i];

            for (let j = 0; j <= 1; j++) {
                // const element = array[j];
                let coldown
                if (j == 0) {

                    let buy = dp[i + 1][1] - prices[i]
                    coldown = dp[i + 1][0]

                    dp[i][0] = Math.max(coldown, buy)
                }
                else {
                    let sel = dp[i + 2][0] + prices[i]
                    let coldown = dp[i + 1][1]
                    dp[i][1] = Math.max(coldown, sel)
                }

            }

        }

        return dp[0][0]
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

// prices = [1, 3, 4, 0, 4]

// prices = [1, 4, 2]

// prices = [2, 1, 4, 5, 2, 9, 7]

// prices = [1, 4, 2]


// prices = [2, 1, 4, 5, 2, 9, 7]

prices = [6, 1, 3, 2, 4, 7]
// TODO; ошибка тк не видит 7-1

// prices = [1, 3, 2, 4]

console.log('::: ', sol.maxProfit(prices)); 