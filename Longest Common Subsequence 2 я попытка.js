class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let a, b
        if (text1.length < text2.length) {
            a = text1
            b = text2
        }
        else {
            a = text2
            b = text1
        }

        // bag revers
        // для a 
        let startBag = new Set()
        // TODO сделать не set а map

        let curBag = startBag

        let wordToBagword = new Map()

        for (let i = 0; i < a.length; i++) {
            const char = a[i];
            wordToBagword.set(char, curBag)
            curBag = new Set(curBag)
            curBag.add(char)
        }


        let dp = Array.from({ length: b.length }, v => 0)

        for (let i = 0; i < b.length; i++) {
            const charB = b[i];
            if (wordToBagword.has(charB)) {
                let curBag = wordToBagword.get(charB)
                dp[i] = 1
                for (let j = 0; j < i; j++) {
                    const charFindPrev = b[j];

                    if (curBag.has(charFindPrev)) {
                        // dp[j]? 
                        // 
                        dp[i] = Math.max(dp[j] + 1, dp[i])

                    }

                }
            }

        }

        return Math.max(...dp)
        let chek = 1
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


nums = [1, 2, 3, 4, 5]

nums = [3, 3, 3, 4, 5]

m = 3, n = 6
m = 3, n = 3
text1 = "abcd", text2 = "abcd"

text1 = "cat", text2 = "crabt"

text1 = "abcba"
text2 = "abcbcba"

console.log 