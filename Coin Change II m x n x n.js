class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {

        coins.sort((a, b) => a - b)

        let dp = Array.from({ length: amount + 1 }, v => Array.from({ length: coins.length }, v => 0))

        dp[dp.length - 1][0] = 1
        for (let i = 0; i < dp[dp.length - 1].length; i++) {
            const element = dp[dp.length - 1][i];

            dp[dp.length - 1][i] = 1

        }

        let hehek = 1

        // coins.length - 1
        for (let j = coins.length - 1; j >= 0; j--) {
            // const element = array[j];

            let coin = coins[j]

            for (let i = dp.length - 2; i >= 0; i--) {
                const elDp = dp[i];

                let curAmount = i

                let nextI = coin + curAmount
                if (nextI < dp.length && dp[nextI][j] != 0) {

                    dp[i][j] += dp[nextI][j]

                    let ehehel = 1
                }
                // if (i < dp.length - 1 ) {

                // }
                if (j < coins.length - 1) {
                    dp[i][j] += dp[i][j + 1]
                }




            }

        }
        return dp[0][0]
        // for (let i = dp.length - 1; i >= 0; i--) {
        //     let curSum = i
        //     if (i == 3) {
        //         let hehe = 1
        //     }
        //     const curArDp = dp[i];

        //     for (let j = curArDp.length - 1; j >= 0; j--) {
        //         const coinDp = curArDp[j];
        //         if (coinDp == 0) {
        //             // мб не break а contunue
        //             continue
        //         }

        //         for (let z = j; z < coins.length; z++) {
        //             const coin = coins[z];

        //             // let z = indexOfCoin


        //             let nextDpIndex = curSum - coin
        //             if (nextDpIndex == 0) {
        //                 let hcheke = 1
        //             }
        //             if (nextDpIndex >= 0) {
        //                 dp[nextDpIndex][z] += dp[i][j]
        //             }
        //             else {
        //                 break
        //             }


        //             let shehek = 1

        //         }

        //         let cheke = 1



        //     }
        // }


        // function sum(arr) {
        //     let s = 0
        //     for (let i = 0; i < arr.length; i++) {
        //         const element = arr[i];
        //         s += element

        //     }
        //     return s


        // }
        // return sum(dp[0])
        let hchel = 1

    }
}

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

// amount = 4, coins = [1, 2, 3]

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