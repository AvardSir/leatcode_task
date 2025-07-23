class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length == 1) {
            return 0

        }
        let l = prices[0], r = prices[1]
        let max = prices[l] < prices[r] ? prices[r] - prices[l] : 0
        for (let i = 1; i < prices.length; i++) {
            const el = prices[i]
            let cur = r - l
            max = max < cur ? cur : max
            if (el == 10) {
let a=12
            }
            if (el > r) {
                r = el
            }
            if (el < l && i != prices.length - 1) {
                l = el
                r = prices[i + 1]
            }

        }

        return max
    }
}


// 
a = new Solution()
// 

prices = [10, 1, 5, 6, 7, 1]
prices = [7, 1, 5, 3, 6, 4]

prices = [2, 1, 2, 1, 0, 1, 2]

prices = [1, 2, 11, 4, 7]
prices = [10, 8, 7, 5, 2]
prices = [5, 1, 5, 6, 7, 1, 10]

console.log('Задача ответ::: ', a
    .maxProfit(prices));

