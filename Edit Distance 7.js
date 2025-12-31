class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        word1 += '_'
        word2 += '_'


        let minCount = Infinity
        let memo = new Map()

        let dp = Array.from({ length: word1.length }, v => Array.from({ length: word2.length }, v => Infinity))

        function dfs(w1i, w2j, count) {

            if (w1i > word1.length - 1 || w2j > word2.length - 1) {
                return
            }
            if (w1i == word1.length - 1 && w2j == word2.length - 1) {
                // count += Math.abs(word1.length - word2.length)
                minCount = Math.min(minCount, count)
                return
                // ?
            }
            if (dp[w1i][w2j] != Infinity) {
                let cashCountVal = dp[w1i][w2j]
                if (cashCountVal <= count) {
                    return
                }
                else {
                    dp[w1i][w2j] = count
                }

            }
            else {
                dp[w1i][w2j] = count
            }
            // if (w2j == word2.length - 1) {
            //     count += word1.length - word2.length
            //     // ?
            // }

            let charW1 = word1[w1i]

            let charW2 = word2[w2j]

            if (charW1 == charW2) {
                dfs(w1i + 1, w2j + 1, count)
            }
            else {
                dfs(w1i + 1, w2j + 1, count + 1)
                dfs(w1i + 1, w2j, count + 1)

                dfs(w1i, w2j + 1, count + 1)

            }





        }

        dfs(0, 0, 0)

        return minCount
        // function dfs(curW1, curW2) { }

        // как понять сколько? 
        // a) конец строки w1=конец w2? w1Len=w2Len &&&
        // b)

        // function dfs(curW1, curW2) {
        //     // key?w1?
        //     if (memo.has(curW1)) {

        //     }
        // }
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


word1 = "monkeys", word2 = "money"

word1 = "neatcdee", word2 = "neetcode"



console.log('::: ', sol.minDistance(word1, word2)); 