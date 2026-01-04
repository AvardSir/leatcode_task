class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let dp = Array.from({ length: matrix.length }, v => Array.from({ length: matrix[0].length }, v => false))

        let ehhe = 1
        function dfs(i, j, isGoUpper) {
            if (dp[i][j]) {
                return 0
            }

            dp[i][j] = true


            // uper
            let curVal = matrix[i][j]
            if (curVal == 0) {
                let hthth = 1
            }
            let uperPoints = []
            let downPoints = []
            // TODO

            function chekPoint(localCurVal, iNext, jNext) {
                if (iNext < 0 || iNext > matrix.length - 1 || jNext < 0 || jNext > matrix[0].length - 1 || dp[iNext][jNext]) {
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

            chekPoint(curVal, i, j + 1)
            chekPoint(curVal, i, j - 1)
            chekPoint(curVal, i - 1, j)
            chekPoint(curVal, i + 1, j)

            if (uperPoints.length == 0 && downPoints.length == 0) {
                return 1
            }

            // up
            let maxUp = -Infinity


            for (let i = 0; i < uperPoints.length; i++) {
                const element = uperPoints[i];
                let curI = element[0]
                let curJ = element[1]
                maxUp = Math.max(maxUp, dfs(curI, curJ, true))


            }
            // down
            let maxDownn = -Infinity

            for (let i = 0; i < downPoints.length; i++) {
                const element = downPoints[i];
                let curI = element[0]
                let curJ = element[1]
                maxDownn = Math.max(maxDownn, dfs(curI, curJ, false))


            }

            // if up and down maxPath = Math.max(curDfs, maxPath)
            if (maxDownn != -Infinity && maxUp != -Infinity) {
                let potentialPath = maxDownn + maxUp + 1
                maxPath = Math.max(potentialPath, maxPath)
            }
            if (maxUp == -Infinity) {
                maxUp = 0
            }
            if (maxDownn == -Infinity) {
                maxDownn = 0
            }
            // if up return max up
            if (isGoUpper) {
                if (maxDownn != -Infinity) {
                    maxPath = Math.max(maxDownn + 1, maxPath)
                }
                return maxUp + 1
            }
            else {
                if (maxUp != -Infinity) {
                    maxPath = Math.max(maxUp + 1, maxPath)
                }
                return maxDownn + 1
            }


            let ehche = 1


            let ehehek = 1


        }
        let maxPath = -Infinity
        for (let i = 0; i < matrix.length; i++) {
            // const element = matrix[i];
            for (let j = 0; j < matrix[i].length; j++) {
                const element = matrix[i][j];
                if (!dp[i][j]) {
                    let curDfs = dfs(i, j, true)
                    maxPath = Math.max(curDfs, maxPath)
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

// matrix = [[1, 5, 3], [2, 3, 6], [1, 1, 1]]

// matrix = [[5, 5, 3], [2, 3, 6], [1, 1, 1]]

// console.log('matrix::: ', matrix);

// matrix = [[1, 2, 3], [2, 1, 4], [7, 6, 5]]

matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
// [9,9,4], 
// [6,6,8],
// [2,1,1]

matrix = [[7, 7, 5], [2, 4, 6], [8, 2, 0]]
// matrix=[
// [7,7,5],
// [2,4,6],
// [8,2,0]]

console.log('::: ', sol.longestIncreasingPath(matrix)); 