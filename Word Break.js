class TreeNode {
    constructor(charIput) {
        this.treeMap = new Map()
        this.isEnd = false
        this.whatChar = charIput
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        let startTreeNode = new TreeNode('')


        for (let i = 0; i < wordDict.length; i++) {
            const word = wordDict[i];

            let curNode = startTreeNode
            let curMap = curNode.treeMap
            for (let j = 0; j < word.length; j++) {
                const char = word[j];
                if (!curMap.has(char)) {
                    curMap.set(char, new TreeNode(char))
                }
                curNode = curMap.get(char)
                curMap = curNode.treeMap

                let chek = 1


            }
            curNode.isEnd = true
            let chek233 = 1

        }

        let chehk = 1
        let dp = Array.from({ length: s.length }, v => 0)
        dp[0] = 1
        let curNode = startTreeNode
        let curMap = curNode.treeMap
        for (let i = 0; i < s.length; i++) {
            if (dp[i] == 0) {
                continue
            }

            const char = s[i];
            if (!curMap.has(char)) {
                continue
            }

            // curNode = curMap.get(char)
            let j = i

            let curChar = s[j]
            while (true) {
                curChar = s[j]
                if (!curMap.has(curChar)) {
                    break
                }
                curNode = curMap.get(curChar)
                curMap = curNode.treeMap

                if (curNode.isEnd) {
                    if (j == s.length - 1) {
                        return true
                    }
                    dp[j + 1] = 1
                }


                j++
            }

            curNode = startTreeNode
            curMap = curNode.treeMap

        }
        return false
        // if (dp[dp.length - 1] == 1) {
        //     return true
        // }
        // else {
        //     return false
        // }
        let cheh = 1
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