class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        function delcomin() {
            let minLen = Math.min(word1.length, word2.length)

            let newW1 = ''
            let newW2 = ''

            // for (let i = lesMin - 1; i >= 0; i--) {
            //     const charWord1 = word1[i];
            //     const charWord2 = word2[i];

            //     if (charWord1 != charWord2) {
            //         newW1+=
            //     }

            // }

            for (let i = 0; i < minLen; i++) {
                // const element = array[i];
                const charWord1 = word1[i];
                const charWord2 = word2[i];
                if (charWord1 != charWord2) {
                    newW1 += charWord1
                    newW2 += charWord2
                }
            }

            if (word1.length != word2.length) {
                let maxLen = Math.max(word1.length, word2.length)
                let deltaLen = maxLen - minLen
                if (word1.length > word2.length) {
                    for (let i = minLen; i < word1.length; i++) {
                        // const element = word1[i];
                        const charWord1 = word1[i];
                        newW1 += charWord1

                    }
                }
                else {
                    for (let i = minLen; i < word2.length; i++) {
                        // const element = word1[i];
                        const charWord2 = word2[i];
                        newW2 += charWord2

                    }
                }
            }

            //TODO: хвост не убрался 
            [word1, word2] = [newW1, newW2]
        }
        // delcomin()
        let count = 0
        let i = 0, j = 0
        // let ar = [1, 2]
        // ar.shift()

        let dp = Array.from({ length: word1.length }, v => Array.from({ length: word2.length }, v => 0))
        function checkIj(i, j) {
            if (i < word1.length - 1) {
                let nextI = dp[i + 1][j]

                dp[i][j] = Math.max(dp[i][j], nextI)
            }
            if (j < word2.length - 1) {
                let nextJ = dp[i][j + 1]

                dp[i][j] = Math.max(dp[i][j], nextJ)
            }
        }
        for (let i = dp.length - 1; i >= 0; i--) {
            // const word1Dp = dp[i];
            let charW1 = word1[i]
            for (let j = word2.length - 1; j >= 0; j--) {
                let charW2 = word2[j]
                let dpEl = dp[i][j];

                if (charW2 == charW1) {
                    dp[i][j] = 1
                    if (i < word1.length - 1 && j < word2.length - 1) {
                        let nextDiagonal = dp[i + 1][j + 1]
                        dp[i][j] = nextDiagonal + 1

                    }
                    // dp[i][j] = dp[]
                }
                else {
                    checkIj(i, j)
                }
                let chhek = 1

            }

        }

        let sameChar = dp[0][0]


        let maxLen = Math.max(word1.length, word2.length)

        count += maxLen - sameChar
        return count
        // while (word1.length && word2.length) {
        //     let w1Char = word1[i]
        //     let w2Char = word2[i]
        //     if (w1Char == w2Char) {
        //         word1.shift()
        //         word2.shift()
        //     }
        //     else {
        //         word1.shift()
        //         count++
        //     }

        //     let chehk = 1

        // }
        // for (let i = 0; i < word2.length; i++) {
        //     const charWord2 = word2[i]; F

        //     if (word1[i]) {

        //     }
        //     else {

        //     }


        // }
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


word1 = "monkeys"
word2 = "money"

word1 = "neatcdee", word2 = "neetcode"



console.log('::: ', sol.minDistance(word1, word2)); 