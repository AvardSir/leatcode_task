class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        // function delcomin() {
        //     let minLen = Math.min(word1.length, word2.length)

        //     let newW1 = ''
        //     let newW2 = ''

        //     // for (let i = lesMin - 1; i >= 0; i--) {
        //     //     const charWord1 = word1[i];
        //     //     const charWord2 = word2[i];

        //     //     if (charWord1 != charWord2) {
        //     //         newW1+=
        //     //     }

        //     // }

        //     for (let i = 0; i < minLen; i++) {
        //         // const element = array[i];
        //         const charWord1 = word1[i];
        //         const charWord2 = word2[i];
        //         if (charWord1 != charWord2) {
        //             newW1 += charWord1
        //             newW2 += charWord2
        //         }
        //     }

        //     if (word1.length != word2.length) {
        //         let maxLen = Math.max(word1.length, word2.length)
        //         let deltaLen = maxLen - minLen
        //         if (word1.length > word2.length) {
        //             for (let i = minLen; i < word1.length; i++) {
        //                 // const element = word1[i];
        //                 const charWord1 = word1[i];
        //                 newW1 += charWord1

        //             }
        //         }
        //         else {
        //             for (let i = minLen; i < word2.length; i++) {
        //                 // const element = word1[i];
        //                 const charWord2 = word2[i];
        //                 newW2 += charWord2

        //             }
        //         }
        //     }

        //     //TODO: хвост не убрался 
        //     [word1, word2] = [newW1, newW2]
        // }
        // delcomin()
        let count = 0
        let i = 0, j = 0
        // let ar = [1, 2]
        // ar.shift()
        word1 += '_'
        word2 += '_'
        let dp = Array.from({ length: word1.length }, v => Array.from({ length: word2.length }, v => Infinity))
        dp[dp.length - 1][dp[0].length - 1] = 0
        // function checkIj(i, j) {
        //     if (i < word1.length - 1) {
        //         let nextI = dp[i + 1][j]

        //         dp[i][j] = Math.max(dp[i][j], nextI)
        //     }
        //     if (j < word2.length - 1) {
        //         let nextJ = dp[i][j + 1]

        //         dp[i][j] = Math.max(dp[i][j], nextJ)
        //     }
        // }
        for (let i = dp.length - 1; i >= 0; i--) {
            // const word1Dp = dp[i];
            let charW1 = word1[i]
            if (i == dp.length - 2) {
                let hththt = 1
            }
            for (let j = word2.length - 1; j >= 0; j--) {
                if (j == word2.length - 1 && i == dp.length - 1) {
                    continue
                }
                let charW2 = word2[j]

                let dpEl = dp[i][j];
                let curMin = Infinity
                let checkNextI = i < dp.length - 1

                let down = Infinity
                let right = Infinity
                let diag = Infinity

                if (checkNextI) {
                    // curMin = Math.min(curMin, dp[i + 1][j] + 1)
                    down = dp[i + 1][j] + 1
                }

                let chekNextJ = j < dp[0].length - 1
                if (chekNextJ) {
                    // curMin = Math.min(curMin, dp[i][j + 1] + 1)
                    right = dp[i][j + 1] + 1
                }

                if (chekNextJ && checkNextI) {
                    // curMin = Math.min(curMin, dp[i + 1][j + 1])

                    // diag = dp[i + 1][j + 1]

                    if (charW2 == charW1) {
                        // dp[i][j] = curMin
                        diag = dp[i + 1][j + 1]
                    }
                    else {
                        // dp[i][j] = curMin + 1
                        diag = dp[i + 1][j + 1] + 1
                    }
                }
                dp[i][j] = Math.min(diag, down, right)





            }

        }

        return dp[0][0]
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


// word1 = "monkeys", word2 = "money"

word1 = "neatcdee", word2 = "neetcode"



console.log('::: ', sol.minDistance(word1, word2)); 