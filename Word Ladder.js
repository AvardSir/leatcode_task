// const { useInsertionEffect } = require("react")

class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        wordList.push(beginWord)
        function creaWebWord(wordList) {
            let WebMap = new Map()
            function compare(strA, strB) {
                if (strA == 'cat' || strB == 'cat') {
                    let hch = 3
                }
                let l = 0
                let r = 0

                let chages = 0
                // let ar = [1]
                // ar.length
                while (l < strA.length) {
                    if (strA[l] != strB[r]) {
                        chages++
                        if (chages > 1) {
                            return false
                        }
                    }
                    l++
                    r++
                }

                if (chages == 1) {
                    return true
                }
                else {
                    return false
                }
            }
            // let a = 'cat'
            // let b = 'dtt'

            // let cheh42k = compare(a, b)

            let chekwthis = 4214

            for (let i = 0; i < wordList.length; i++) {
                const elBase = wordList[i];
                for (let j = i + 1; j < wordList.length; j++) {
                    const elTocompare = wordList[j];
                    if (compare(elBase, elTocompare)) {
                        let a = elBase
                        let b = elTocompare
                        if (!WebMap.has(a)) {
                            WebMap.set(a, [])
                        }
                        if (!WebMap.has(b)) {
                            WebMap.set(b, [])
                        }

                        let curArA = WebMap.get(a)
                        curArA.push(b)
                        let curArB = WebMap.get(b)
                        curArB.push(a)

                        let chehel = 1

                        // if (!WebMap.has(elBase)) {
                        //     WebMap.set(elBase, [])
                        // }
                        // let curAr = WebMap.get(elBase)
                        // curAr.push(elTocompare)
                    }
                }

            }


            return WebMap
        }
        // ошибка в web не ищет ничего из cat 
        let WebMap = creaWebWord(wordList)
        let isFind = false

        let minVaritant = Infinity
        let allPath = []
        let curPath = []
        let visitedSet = new Set()
        let countPath = 0
        function dfs(str) {

            if (str == endWord) {
                minVaritant = Math.min(minVaritant, countPath)
                isFind = true
                allPath.push([...curPath])
                return
            }
            if (visitedSet.has(str)) {
                return
            }

            if (!WebMap.has(str)) {
                return
            }
            let curArrChild = WebMap.get(str)
            visitedSet.add(str)
            countPath++
            curPath.push(str)
            for (let i = 0; i < curArrChild.length; i++) {
                const element = curArrChild[i];

                dfs(element)
                if (str == 'hot') {
                    let tht = 13
                }

            }
            visitedSet.delete(str)
            curPath.pop()
            countPath--

        }
        WebMap
        allPath
        dfs(beginWord)
        if (!isFind) {
            return 0
        }
        return minVaritant + 1
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

console.log(' ::: ', sol.ladderLength(beginWord, endWord, wordList));