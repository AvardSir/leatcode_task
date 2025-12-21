class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        if (amount == 0) {
            if (coins.length > 0) {
                return 1
            }
            else {
                return 0
            }
        }
        coins.sort((a, b) => a - b)
        let ans = 0
        let memo = new Map()
        function dfs(curSum, startI) {

            // if (memo.has(key)) {
            //     return memo.get(key)
            // }

            let s = 0
            for (let i = startI; i < coins.length; i++) {
                const coin = coins[i];
                let key = `${curSum}-${i}`
                if (memo.has(key)) {
                    s += memo.get(key)
                }
                else {
                    let counSum = coin + curSum

                    if (counSum > amount) {
                        break
                    }
                    if (counSum == amount) {
                        s++
                        break
                    }

                    let curAd = dfs(counSum, i)
                    s += curAd

                    memo.set(key, curAd)
                }
            }
            return s
            // memo.set(key,)
        }

        return dfs(0, 0)
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

// amount = 0
// coins = [7]

// amount = 100
// coins = [99, 1]

amount = 500
coins = [3, 5, 7, 8, 9, 10, 11]


console.log('::: ', sol.change(amount, coins)); 