class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        if (s.length < 1) {
            return 0
        }
        let dp = Array.from({ length: s.length }, v => 0)
        // для dp[0]
        if (s[0] != '0') {
            dp[0] = 1

        }



        function ifCharCor(str) {
            if (str[0] == '0') {
                return false
            }
            str = Number(str)
            if (str > 0 && str < 27) {
                return true
            }
            return false
        }

        // для dp[1]


        let l = s[0]
        let r = s[1]

        if (r != '0') {
            dp[1] = dp[0]

        }

        let lr = l + r
        if (ifCharCor(lr) ) {
            dp[1]++
        }

        for (let i = 2; i < s.length; i++) {
            const char = s[i];
            if (char != '0') {
                dp[i] = dp[i - 1]
            }


            let l = s[i - 1]
            let r = s[i]
            let lr = l + r

            if (ifCharCor(lr)) {
                dp[i] += dp[i - 2]

                // if (Number(r) != '0') {
                //     dp[i] += dp[i - 2]
                // }
                // else {
                //     dp[i] += dp[i - 1]
                // }

            }


        }
        return dp[dp.length - 1]
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()



s = "ababd"
s = "abbc"
s = "aaa"
s = "12"

// s = "226"
s = "06"
s = "10"
// 
// s = "1123"
// s = "27"

// s = "12"
s = "2101"

s = "301"

s="10"
console.log(' ::: ', sol.numDecodings(s));