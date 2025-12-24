class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length != s3.length) {
            return false
        }

        s3 += '_'

        let dp = Array.from({ length: s1.length + 1 }, v => Array.from({ length: s2.length + 1 }, v => false))
        dp[dp.length - 1][dp[0].length - 1] = true

        s1 += '_'
        s2 += '_'

        function s1s2ToS3(s2i, s1j) {
            let s3Index = s2i + s1j
            return s3Index
        }

        // let chaS1Chak = 'ab'
        // let charS2Chek = 'cd'
        // let s3CharChe = 'abcd'
        // let s2i = 1, s1j = 1
        // let chehkFun = s1s2ToS3(s2i, s1j)
        // let hehek = 1

        function chekIJup_right(i, j) {

            let charS3 = s3[i + j]
            if (i != dp.length - 1) {

                let downI = i + 1
                let downJ = j
                let DownDpChar = dp[downI][downJ]

                if (DownDpChar) {
                    let charS1 = s1[i]// i //?

                    if (charS3 == charS1) {
                        dp[i][j] = (dp[i][j] || DownDpChar)

                    }
                }



            }
            if (j != dp[0].length - 1) {
                let rightI = i
                let rightJ = j + 1
                let rightDpEl = dp[rightI][rightJ]

                if (rightDpEl) {
                    let charS2 = s2[j]
                    let elS2 = s2[j]

                    if (charS2 == charS3) {

                        dp[i][j] = (dp[i][j] || rightDpEl)

                        let heheh = 1
                    }

                    let chehk = 1
                    // dp[i][j] = (dp[i][j] || rightDpEl)
                }


            }
        }
        let s3Len = s3.length
        for (let i = dp.length - 1; i >= 0; i--) {
            // const charS2 = s1[i];

            if (i == dp.length - 2) {
                let chhek = 1
            }
            for (let j = dp[0].length - 1; j >= 0; j--) {
                let iDpEl = dp[i]
                let jDpel = dp[i][j]

                // const charS1 = s2[j];
                // let s3Index = s1s2ToS3(i, j)
                // let s3Char = s3[s3Index]

                chekIJup_right(i, j)
                // let nextChar = s3[s3Index + 1]
                let chhek = 1
            }

        }
        return dp[0][0]
        let ehhek = 1
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"

// s1 = ""
// s2 = ""
// s3 = "a"
s1 = "abc", s2 = "xyz", s3 = "abxzcy"

s1 = "", s2 = "", s3 = ""

s1 = ""
s2 = ""
s3 = "a"

console.log('::: ', sol.isInterleave(s1, s2, s3)); 