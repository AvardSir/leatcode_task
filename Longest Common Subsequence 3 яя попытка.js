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

        // слева направо
        let charToMapL = new Map()

        let curMap = new Map()

        for (let i = 0; i < a.length; i++) {
            const char = a[i];
            // TODOL

            charToMapL.set(char, curMap)
            curMap = new Map(curMap)
            if (!curMap.has(char)) {
                curMap.set(char, 0)
            }
            let curVal = curMap.get(char)
            curMap.set(char, curVal + 1)


        }
        // справа налево 

        let charToMapR = new Map()

        curMap = new Map()

        let chehe = 1
        for (let i = a.length - 1; i >= 0; i--) {
            const char = a[i];

            charToMapR.set(char, curMap)
            curMap = new Map(curMap)
            if (!curMap.has(char)) {
                curMap.set(char, 0)
            }
            let curVal = curMap.get(char)
            curMap.set(char, curVal + 1)

            let chel = 1
            // TODO:

        }


        let dp = Array.from({ length: b.length }, v => 0)

        let neMAp = new Map()

        for (let i = 0; i < dp.length; i++) {
            // const element = dp[i];
            let curChar = b[i]
            neMAp = new Map()
            // if (!charToMapR.has(curChar)) {
            //     continue
            // }

            // let curMap = new Map(charToMapR.get(curChar))
            neMAp.set(curChar, 1)
            dp[i] = [1, neMAp]

        }
        // [len, map( key-char => countR)]
        // dp[0] = 1
        curMap = new Map()

        for (let i = 0; i < b.length; i++) {
            const charBI = b[i];
            if (!charToMapL.has(charBI)) {
                continue
            }
            let curDp = dp[i]
            let curLen = curDp[0]
            let curRmapDP = curDp[1]
            // let 
            curMap = charToMapL.get(charBI)
            for (let j = 0; j < i; j++) {
                const charBJ = b[j];
                if (!curMap.has(charBJ)) {
                    continue
                }
                let curNode = dp[j]
                let lenJ = curNode[0]
                let curMapR = curNode[1]

                if (!curMapR.has(charBI)) {
                    continue
                }

                let val = curMapR.get(charBI)

                if (val < 1) {
                    continue
                }

                if (lenJ + 1 > curLen) {
                    curRmapDP.set(charBJ, val - 1)

                }


                // TODO





                // перезапись в dp
                // let curRmap = d
                // TODO



                let cheheekek = 1

            }

        }
        let chekProsude = 123
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


text1 = "dbcbv"
text2 = "abcdbg"


console.log('::: ', sol.longestCommonSubsequence(text1, text2)); 