class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = []
        dp = Array.from({ length: s.length }, v => 0)
        // dp.push(1)
        if (Number(s[0]) > 0) {
            dp[0] = 1
        }


        for (let i = 1; i < s.length; i++) {
            const char = s[i];

            let curCount = 0
            let l = s[i - 1]

            let r = s[i]

            // 1 число
            let intR = Number(r)
            if (intR > 0) {
                // curCount += dp[i - 1] 
                dp[i] = dp[i - 1]
                // TODO: посдчет страный 
            }

            // проверить 2 

            let intL = Number(l)
            if (intL > 0) {

                let lr = l + r

                lr = Number(lr)

                if (lr < 27) {
                    // curCount++
                    // число можно 1 23
                    dp[i]++
                    // if (i - 2 > -1) {
                    //     // curCount += dp[i - 2] + 1

                    // }

                }
                let chahk = 1
            }


            // добавить 1 

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
// s = "06"

s="1123"
console.log(' ::: ', sol.numDecodings(s));