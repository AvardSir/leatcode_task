class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let memo = new Map()

        // true?
        // false
        function dfs(i, isBuy, indBuy) {

            let key = `${i}-${isBuy}`
            if (memo.has(key)) {
                return memo.get(key)
            }


            let coldaun = dfs(i + 1, isBuy, indBuy)

            if (isBuy) {

                let sell = dfs(i + 1, false, indBuy)

                // сравнить 
                // return сравнение
            }
            else {

                // isSel=true
                // посчтитаь прибыль 
                let profit = prices[i] - prices[indBuy]

                return profit + coldaun

                // 
            }
        }


        return dfs(0, isBuy, -1)
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