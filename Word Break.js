class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        function compareTwoStr(a, i) {
            let j = 0
            while (j < a.length) {
                let curCharS = s[i]
                let curCharA = a[j]

                if (curCharA != curCharS || i > s.length) {
                    return false
                }


                i++
                j++
            }
            return true
        }

        s = 'abc'
        let chek = 'ab'
        // compareTwoStr(a, i)
        console.log('compareTwoStr(a, i)::: ', compareTwoStr(chek, 2));
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


coins = [1, 5, 10], amount = 12
nums = [1, 2, -3, 4]

nums = [-2, 0, -1]

// nums = [-3, -1, -1]
// nums = [-1, -1]

// nums = [-4, 1, -3, 1, -2, 10]

nums = [2, 3, -2, 4]

nums = [0]
nums = [-3, -1, -1]
s = "applepenapple", wordDict = ["apple", "pen", "ape"]

// s = "catsincars"
// wordDict = ["cats", "cat", "sin", "in", "car"]
console.log(' ::: ', sol.wordBreak(s, wordDict));