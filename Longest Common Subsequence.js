class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let a
        let b
        if (text1.length < text2.length) {
            a = text1
            b = text2
        }
        else {
            a = text2
            b = text1
        }

        // for (let i = 0; i < a.length; i++) {
        //     const charA = a[i];
        //     for (let i = 0; i < b.length; i++) {
        //         const charB = b[i];


        //         if (charB == charA) {

        //         }
        //     }
        // }
        let i = 0
        let j = 0

        let charToBagWords = new Map()

        let curBag = new Set()
        for (let i = a.length - 1; i >= 0; i--) {

            const char = a[i];

            charToBagWords.set(char, curBag)
            curBag = new Set(curBag)
            curBag.add(char)


        }
        charToBagWords.set('', curBag)
        let chhel = 1


        let curBag = curBag
        let maxCount = -Infinity
        let curCount
        while (i < a.length) {
            curCount = 0
            let charA = a[i]
            j = 0


            let psevdoI = i
            while (j < b.length) {
                charA = a[psevdoI]
                let charB = b[j]
                if (charA == 'q') {
                    let chhe = 1

                    // тут крч какая то неясная проблема 
                }
                if (charA == charB) {
                    curCount++
                    maxCount = Math.max(maxCount, curCount)
                    psevdoI++
                }
                // тут
                j++
            }

            i++
        }

        return maxCount == -Infinity ? 0 : maxCount



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
// text1 = "abcd", text2 = "abcd"

// text1 = "abcd"
// text2 = "efgh"

// text1 = "psnw"
// text2 = "vozsh"

// text1 = "oxcpqrsvwf"
// text2 = "shmtulqrypy"

// text1 = "hofubmnylkra"
// text2 = "pqhgxgdofcvmr"

console.log(' ::: ', sol.longestCommonSubsequence(text1, text2));