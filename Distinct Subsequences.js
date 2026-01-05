class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {

        let dp = Array.from({ length: t.length }, v => Array.from({ length: s.length }, v => 0))

        let heheh2 = 1
        // let i = t.length - 1
        // const tChar = t[i];

        let i = 1
        let chehek = t.length - 2 - (i - 1)

        let hhehheehk = 1
        i = t.length - 1
        const tChar = t[i];

        for (let j = s.length - 1; j >= t.length - 1; j--) {
            const dpEl = dp[i][j];
            let sChar = s[j]
            if (sChar == tChar) {
                // dp[i][j] = dp[i][j + 1] ? dp[i][j + 1] : 0
                dp[i][j]++
            }

            dp[i][j] += dp[i][j + 1] ? dp[i][j + 1] : 0

            // let hthht = 1

        }

        let heheh = 1


        for (let i = t.length - 2; i >= 0; i--) {
            const tChar = t[i];

            for (let j = s.length - 2; j >= i; j--) {
                const dpEl = dp[i][j];
                let sChar = s[j]
                if (sChar == tChar) {
                    let chehek = dp[i][j + 1]
                    let ttltllt = dp[i + 1][j]
                    // if (dp[i][j + 1]) {
                    //     dp[i][j] = dp[i][j + 1] + dp[i + 1][j]

                    // }
                    // else {
                    //     dp[i][j] = dp[i + 1][j]
                    // }
                    // dp[i][j] = dp[i ][j + 1] ? dp[i][j + 1] + dp[i + 1][j] : dp[i + 1][j]
                    dp[i][j] = dp[i + 1][j + 1] + dp[i][j + 1]
                }
                else {
                    dp[i][j] = dp[i][j + 1]
                }

                let hthht = 1

            }

        }
        return dp[0][0]
        let chek = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

s = "caaat", t = "cat"

s = "rabbbit"
t = "rabbit"
// s = "xxyxy", t = "xy"

console.log('::: ', sol.numDistinct(s, t)); 