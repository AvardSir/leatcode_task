class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let dp = Array.from({ length: matrix.length }, v => Array.from({ length: matrix[0].length }, v => 0))

        function dfs(i, j) {
            function chekIJ(i, j) {
                if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
                    return false
                }
                return true
            }

            if (!chekIJ(i, j)) {
                return 0
            }

            if (dp[i][j] != 0) {
                return dp[i][j] + 1
            }
            let curVal = matrix[i][j]

            let maxVal = 0
            function chekNexIJ(nextI, nextJ, curVal) {
                if (!chekIJ(nextI, nextJ)) {
                    return 0
                }
                let nextVal = matrix[nextI][nextJ]

                if (nextVal > curVal) {
                    return dfs(nextI, nextJ)
                }
                else {
                    return false
                }
            }
            maxVal = Math.max(maxVal, chekNexIJ(i, j + 1, curVal))
            maxVal = Math.max(maxVal, chekNexIJ(i + 1, j, curVal))
            maxVal = Math.max(maxVal, chekNexIJ(i, j - 1, curVal))
            maxVal = Math.max(maxVal, chekNexIJ(i - 1, j, curVal))

            dp[i][j] = maxVal
            return maxVal + 1
            // dfs(i + 1, j)
            // dfs(i, j + 1)
            // dfs(i - 1, j)
            // dfs(i, j - 1)



        }

        let mostMAxVal = 0
        for (let i = 0; i < matrix.length; i++) {
            // const element = matrix[i];
            for (let j = 0; j < matrix[i].length; j++) {
                const element = matrix[i][j];



                mostMAxVal = Math.max(mostMAxVal, dfs(i, j))


            }

        }
        return mostMAxVal
        let dpdpdpd = 1
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

matrix = [[1, 5, 3], [2, 3, 6], [1, 1, 1]]


console.log('::: ', sol.longestIncreasingPath(matrix)); 