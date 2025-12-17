class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let memo = new Map()
        function dfs(i, Buy_Sell) {
            let key = `${i}-${Buy_Sell}`
            if (memo.has(key)) {
                return memo.get(key)
            }
            if (i > prices.length - 1) {
                return 0
            }

            let coldown = dfs(i + 1, Buy_Sell)

            let profit
            if (Buy_Sell) {
                let buy = dfs(i + 1, false) - prices[i]
                // memo.set(key, buy)
                profit = Math.max(buy, coldown)
            }
            else {
                let sell = dfs(i + 2, true) + prices[i]
                profit = Math.max(sell, coldown)
                // memo.set(key, buy)
                // return buy
            }

            memo.set(key, profit)
            return profit
        }

        return dfs(0, true)
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

prices = [1, 3, 4, 0, 4]

// prices = [1, 4, 2]

// prices = [2, 1, 4, 5, 2, 9, 7]

// prices = [1, 4, 2]


// prices = [2, 1, 4, 5, 2, 9, 7]

// prices = [6, 1, 3, 2, 4, 7]
// TODO; ошибка тк не видит 7-1

// prices = [1, 3, 2, 4]

console.log('::: ', sol.maxProfit(prices)); 