class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let memo = new Map()

        // true?
        // false
        function dfs(i, isBuy, isSel, indBuy) {

            if (i == 1 && isBuy == true) {
                let chehek = 1
            }

            let key = `${i}-${isBuy}-${isSel}-${indBuy}`
            if (i > prices.length - 1) {
                return 0
            }
            if (memo.has(key)) {
                return memo.get(key)
            }
            let coldaun
            if (!isBuy && !isSel) {
                coldaun = dfs(i + 1, true, false, indBuy)

                return coldaun
            }

            coldaun = dfs(i + 1, isBuy, isSel, indBuy)

            if (i == 1 && isBuy == true) {
                let chehek = 1
            }
            let profit
            if (isBuy) {
                let buy = dfs(i + 1, false, true, i)
                profit = Math.max(buy, coldaun)
                // memo.set(key, profit)
                // return profit
            }
            if (isSel) {
                let sel = dfs(i + 1, false, false, -1)
                profit = prices[i] - prices[indBuy] + sel
                profit = Math.max(profit, coldaun)

            }
            memo.set(key, profit)
            return profit

        }

        // let isBuy, isSel, indBuy
        return dfs(0, true, false, -1)
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
// TODO; ошибка тк не видит 7-1

// prices = [1, 3, 2, 4]

console.log('::: ', sol.maxProfit(prices)); 