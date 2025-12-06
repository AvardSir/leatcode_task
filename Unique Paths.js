class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({ length: m }, v => Array.from({ length: n }, v => 0))
        for (let i = 0; i < m; i++) {
            // const element = array[i];
            let j = 0
            dp[i][j] = 1


        }
        for (let j = 0; j < n; j++) {
            // const element = array[j];
            let i = 0
            dp[i][j] = 1
        }

        for (let i = 1; i < m; i++) {
            // const element = array[i];

            for (let j = 1; j < n; j++) {
                const el = dp[i][j];
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]


            }

        }

        return dp[m - 1][n - 1]
        let chek = 1
        // dp[i][j]?
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


nums = [1, 2, 3, 4, 5]

nums = [3, 3, 3, 4, 5]

m = 3, n = 6
m = 3, n = 3

console.log(' ::: ', sol.uniquePaths(m, n));