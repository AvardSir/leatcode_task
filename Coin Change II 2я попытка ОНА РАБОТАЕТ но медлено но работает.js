class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        if (amount == 0) {
            return 1
        }
        let dp = Array.from({ length: amount + 1 }, v => 0)

        for (let i = 1; i < dp.length; i++) {
            const el = i;

            let curCount = 0
            let isSelf = false
            for (let j = 0; j < coins.length; j++) {
                const coin = coins[j];

                let delta = el - coin
                if (delta < 0) {
                    break
                }
                if (delta == 0) {
                    isSelf = true
                    curCount++
                    break
                }

                // dp[delta]
                curCount += dp[delta]

            }

            // dp[i] = Math.ceil(curCount / 2)
            dp[i] = curCount
            // if (isSelf) {
            //     dp[i]++
            // }



        }
        if (dp[dp.length - 1] == 0) {
            return 0
        }
        return dp[dp.length - 1]
        // return Math.ceil(dp[dp.length - 1] / 2)
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

amount = 4, coins = [1, 2, 3]

// amount = 0
// coins = [7]

// amount = 500
// coins = [1, 2, 5]

// amount = 5
// coins = [1, 2, 5]

console.log('::: ', sol.change(amount, coins)); 