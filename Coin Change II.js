class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {

        let dp = Array.from({ length: amount.length + 1 }, v => [])
        // dp [ar[Map],setCopy?]
        // let setSet = new Set()
        for (let i = 1; i < dp.length; i++) {
            const num = dp[i];

            for (let j = 0; j < coins.length; j++) {
                const coin = coins[j];

                let dpInd = num - coin

                if (dpInd < 0) {
                    break
                }

                let curDp = dp[dpInd] //ar[map,map,map]

                for (let z = 0; z < curDp.length; z++) {
                    const curMap = curDp[z];
                    if (!curMap.has()) {
                        // TODO: хрень хрен
                        // TODO: в тетради и сдесь

                    }

                }




                // что с ними делать? 

                // if (num - coin) {

                // }



            }

        }
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