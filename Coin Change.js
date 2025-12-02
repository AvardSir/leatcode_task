class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        let dp = Array.from({ length: amount + 1 }, v => Infinity)
        dp[0] = 0
        for (let i = 1; i < dp.length; i++) {
            // const element = array[i];

            // i это цена 
            for (let j = 0; j < coins.length; j++) {
                const coin = coins[j];

                if (coin > i) {
                    break
                }
                let nedDpI = i - coin
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)

            }
        }


        return dp[dp.length - 1] == Infinity ? -1 : dp[dp.length - 1]
        let chek = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


coins = [1, 5, 10], amount = 12

console.log(' ::: ', sol.coinChange(coins, amount));