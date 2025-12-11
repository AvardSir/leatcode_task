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

        let dpLeftMap = new Map()

        for (let i = 0; i < a.length; i++) {
            const char = a[i];
            // TODOL

            charToMapL.set(char, dpLeftMap)
            dpLeftMap = new Map(dpLeftMap)
            if (!dpLeftMap.has(char)) {
                dpLeftMap.set(char, 0)
            }
            let curVal = dpLeftMap.get(char)
            dpLeftMap.set(char, curVal + 1)


        }
        // справа налево 

        let charToMapR = new Map()

        dpLeftMap = new Map()

        let chehe = 1
        for (let i = a.length - 1; i >= 0; i--) {
            const char = a[i];

            charToMapR.set(char, dpLeftMap)
            dpLeftMap = new Map(dpLeftMap)
            if (!dpLeftMap.has(char)) {
                dpLeftMap.set(char, 0)
            }
            let curVal = dpLeftMap.get(char)
            dpLeftMap.set(char, curVal + 1)

            let chel = 1
            // TODO:

        }


        let dp = Array.from({ length: b.length }, v => 0)

        let neMAp = new Map()

        for (let i = 0; i < dp.length; i++) {
            // const element = dp[i];
            let curChar = b[i]
            if (!charToMapR.has(curChar)) {
                continue
            }
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
        dpLeftMap = new Map()

        for (let i = 0; i < b.length; i++) {
            if (i == 10) {
                let chehheek = 1
            }
            const charBI = b[i];
            if (charBI == 'c') {
                let chhck = 1
            }
            if (!charToMapL.has(charBI)) {
                continue
            }
            let curDp = dp[i]
            let curLen = curDp[0]
            let curRmapDP = curDp[1]

            dpLeftMap = charToMapL.get(charBI)
            // TODO работа левого правого 
            for (let j = 0; j < i; j++) {
                const charBJ = b[j];
                if (!dpLeftMap.has(charBJ)) {
                    continue
                }



                let curNode = dp[j]
                let lenJ = curNode[0]
                let curMapR = curNode[1]

                // if (!curMapR.has(charBI)) {
                //     continue
                // }


                function compareLandR(Lmap, Rmap) {
                    let arRmap = Array.from(Rmap)
                    for (let i = 0; i < arRmap.length; i++) {
                        const el = arRmap[i];
                        let char = el[0]
                        let count = el[1]

                        if (count > Lmap.get(char)) {
                            return false
                        }


                    }
                    return true

                    let chekl1 = 1
                }
                let Lmap = dpLeftMap, Rmap = curMapR

                if (!compareLandR(Lmap, Rmap)) {
                    continue
                    // TODO: проверить это
                }

                // let val = curMapR.get(charBI)

                // if (val < 1) {
                //     continue
                // }

                if (lenJ + 1 > curLen) {
                    if (!curRmapDP.has(charBJ)) {
                        curRmapDP.set(charBJ, 0)
                    }
                    let valCHarbjMap = curRmapDP.get(charBJ)
                    curRmapDP.set(charBJ, valCHarbjMap + 1)


                    curNode = [lenJ + 1, curRmapDP]
                    dp[i] = curNode

                    curDp = dp[i]
                    curLen = curDp[0]
                    curRmapDP = curDp[1]
                    let chhe = 1

                }
                let cheheekek = 1

            }

        }

        let maxVal = -Infinity
        for (let i = 0; i < dp.length; i++) {
            const element = dp[i];
            if (element == 0) {
                continue
            }
            maxVal = Math.max(maxVal, element[0])


        }
        return maxVal == -Infinity ? 0 : maxVal
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
text1 = "abcd"
text2 = "efgh"

text1 = "pmjghexybyrgzczy"
text2 = "hafcdqbgncrcbihkd"

console.log('::: ', sol.longestCommonSubsequence(text1, text2)); 