class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let countUp = -Infinity, countDown = -Infinity
        let z = [countUp, countDown]
        let dp = Array.from({ length: matrix.length }, v => Array.from({ length: matrix[0].length }, v => [countUp, countDown]))

        // z= [countUp,countDown]

        let ehhe = 1
        function dfs(i, j, isGoUpper) {

            if (isGoUpper) {
                if (dp[i][j][0] != -Infinity) {
                    return dp[i][j][0] + 1
                }
            }
            else {
                if (dp[i][j][1] != -Infinity) {
                    return dp[i][j][1] + 1
                }

            }

            let curVal = matrix[i][j]
            if (curVal == 0) {
                let hthth = 1
            }
            let uperPoints = []
            let downPoints = []

            function chekPoint(localCurVal, iNext, jNext) {
                if (iNext < 0 || iNext > matrix.length - 1 || jNext < 0 || jNext > matrix[0].length - 1) {
                    return
                }
                let valOfNextpont = matrix[iNext][jNext]
                if (localCurVal < valOfNextpont) {
                    uperPoints.push([iNext, jNext])

                }
                else if (localCurVal > valOfNextpont) {
                    downPoints.push([iNext, jNext])

                }


            }

            function saveDp(i, j, isGoUpper, pathCount) {
                if (isGoUpper) {
                    dp[i][j][0] = Math.max(dp[i][j][0], pathCount)
                }
                else {
                    dp[i][j][1] = Math.max(dp[i][j][1], pathCount)
                }
            }

            chekPoint(curVal, i, j + 1)
            chekPoint(curVal, i, j - 1)
            chekPoint(curVal, i - 1, j)
            chekPoint(curVal, i + 1, j)

            if (uperPoints.length == 0 && downPoints.length == 0) {

                saveDp(i, j, isGoUpper, 0)
                return 1
            }

            if (isGoUpper) {
                let maxUp = -Infinity


                for (let i = 0; i < uperPoints.length; i++) {
                    const element = uperPoints[i];
                    let curI = element[0]
                    let curJ = element[1]
                    maxUp = Math.max(maxUp, dfs(curI, curJ, true))
                }
                if (maxUp == -Infinity) {
                    maxUp = 0
                }
                saveDp(i, j, isGoUpper, maxUp)
                return maxUp + 1
            }
            else {

                // down
                let maxDownn = -Infinity

                for (let i = 0; i < downPoints.length; i++) {
                    const element = downPoints[i];
                    let curI = element[0]
                    let curJ = element[1]
                    maxDownn = Math.max(maxDownn, dfs(curI, curJ, false))
                }

                if (maxDownn == -Infinity) {
                    maxDownn = 0
                }
                saveDp(i, j, isGoUpper, maxDownn)
                return maxDownn + 1
            }


            // if up return max up
            // if (isGoUpper) {

            // }
            // else {

            // }

            let ehche = 1

        }
        let maxPath = -Infinity
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                const element = matrix[i][j];
                if (!dp[i][j][0] != -Infinity || dp[i][j][1] != -Infinity) {
                    let curDfs = dfs(i, j, true)
                    let minCurDfs = dfs(i, j, false)
                    maxPath = Math.max(minCurDfs, curDfs, maxPath)
                    // curDfs = dfs(i, j, false)
                    // console.log('maxPath::: ', maxPath);
                }


            }

        }
        return maxPath
        // dfs(0, 0)


    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

matrix = [[1, 5, 3], [2, 3, 6], [1, 1, 1]]

// matrix = [[5, 5, 3], [2, 3, 6], [1, 1, 1]]

// console.log('matrix::: ', matrix);

// matrix = [[1, 2, 3], [2, 1, 4], [7, 6, 5]]

// matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
// [9,9,4], 
// [6,6,8],
// [2,1,1]

matrix = [[7, 7, 5], [2, 4, 6], [8, 2, 0]]
// matrix=[
// [7,7,5],
// [2,4,6],
// [8,2,0]]

// matrix = [[5, 5, 3], [2, 3, 6], [1, 1, 1]]

// matrix = [[0, 1, 2]]

console.log('::: ', sol.longestIncreasingPath(matrix)); 