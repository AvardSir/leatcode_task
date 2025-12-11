class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        let dp = Array.from({ length: text1.length }, v => Array.from({ length: text2.length }, v => 0))

        // правай колонка 
        // i мнеяется
        let j = text2.length - 1
        for (let i = text1.length - 1; i >= 0; i--) {
            // const element = text1[i];


            let charText1 = text1[i]

            let charText2 = text2[j]
            if (charText1 == charText2) {
                dp[i][j] = 1
                continue
            }

            if (i != text1.length - 1) {
                dp[i][j] = dp[i + 1][j]
            }

        }

        // нижняя колонка
        // j меняется
        let i = text1.length - 1
        for (let j = text2.length - 1; j >= 0; j--) {
            // const element = text2[j];
            let charText1 = text1[i]

            let charText2 = text2[j]
            if (charText1 == charText2) {
                dp[i][j] = 1
                continue
            }
            if (j != text2.length - 1) {
                dp[i][j] = dp[i][j + 1]
            }

        }

        let hht = 1


        // от конца i до начала
        for (let i = text1.length - 2; i >= 0; i--) {
            const elText1 = text1[i];
            for (let j = text2.length - 2; j >= 0; j--) {
                if (i == 4 && j == 0) {
                    let chehek = 1
                }
                const elText2 = text2[j];

                if (elText1 == elText2) {
                    dp[i][j] = 1 + dp[i + 1][j + 1]
                }
                else {
                    dp[i][j] = dp[i][j] + Math.max(dp[i + 1][j], dp[i][j + 1])

                }
                let curEl = dp[i][j]

                let cheke = 1


            }

        }

        return dp[0][0]
        // от конца j до начала


        let cheke = 1
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


nums = [1, 2, 3, 4, 5]

nums = [3, 3, 3, 4, 5]

m = 3, n = 6
m = 3, n = 3
text1 = "abcd", text2 = "abcd"

// text1 = "cat", text2 = "crabt"


// text1 = "dbcbv"
// text2 = "abcdbg"


// text1 = "abcd"
// text2 = "efgh"

text1 = "pmjghexybyrgzczy"
text2 = "hafcdqbgncrcbihkd"

console.log('::: ', sol.longestCommonSubsequence(text1, text2)); 