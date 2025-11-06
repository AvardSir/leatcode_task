

class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // beginWord
        wordList.push(beginWord)

        let paternToChild = new Map()
        for (let i = 0; i < wordList.length; i++) {
            const curStr = wordList[i];
            for (let j = 0; j < curStr.length; j++) {
                const curChar = curStr[j];

                let curWord = curStr.slice(0, j) + '*' + curStr.slice(j + 1)

                if (!paternToChild.has(curWord)) {
                    paternToChild.set(curWord, [])
                }
                let childAr = paternToChild.get(curWord)
                childAr.push(curStr)
            }

        }

        function transformJCharInStr(str, j) {

            return str.slice(0, j) + '*' + str.slice(j + 1)

        }
        let visit = new Set()
        let minPath = Infinity

        let curPath = 0
        function dfs(curStr) {
            if (visit.has(curStr)) {
                return
            }
            if (curStr == endWord) {
                minPath = Math.min(minPath, curPath)
                return
            }
            visit.add(curStr)
            curPath++
            for (let z = 0; z < curStr.length; z++) {
                const element = curStr[z];
                // z -> j
                // curStr
                let jStr = transformJCharInStr(curStr, z)
                if (paternToChild.has(jStr)) {
                    let curChildAr = paternToChild.get(jStr)
                    for (let jStrtoChek = 0; jStrtoChek < curChildAr.length; jStrtoChek++) {
                        const strTochek = curChildAr[jStrtoChek];
                        dfs(strTochek)

                    }
                }
            }
            curPath--
            visit.delete(curStr)
            // let childAr=
        }
        dfs(beginWord)
        if (minPath == Infinity) {
            return 0
        }
        return minPath + 1
        let chhk = 'cat'
        let holo = transformJCharInStr(chhk, 1)
        let chek = 1
    }
}



class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()

beginWord = "cat", endWord = "sag", wordList = ["bat", "bag", "sag", "dag", "dot"]

beginWord = "hot"
endWord = "dog"
wordList = ["hot", "dog", "cog", "pot", "dot"]

beginWord = "cat"
endWord = "sag"
wordList = ["bat", "bag", "sag", "dag", "dot"]


console.log(' ::: ', sol.ladderLength(beginWord, endWord, wordList));