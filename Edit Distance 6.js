class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        word1 += '_', word2 += '_'

        let minCount = Infinity
        let heheh = 1
        let memo = new Map()
        function dfs(i, j, count) {
            if (i == word1.length - 1 && j == word2.length - 1) {
                minCount = Math.min(count, minCount)
            }
            let key = `${i}-${j}`
            if (memo.has(key)) {
                let memVal = memo.get(key)
                if (memVal < count) {
                    return memVal
                }
            }
            else {
                memo.set(key, count)
            }

            // let curCount = Infinity
            // if (i < word1.length - 1) {
            //     curCount = Math.min(curCount, dfs(i + 1, j, count + 1))
            // }

            let charW1 = word1[i]
            let charW2 = word2[j]

            if (charW1 == charW2 && i < word1.length - 1 && j < word2.length - 1) {
                dfs(i + 1, j + 1, count)
            }
            else {
                dfs(i + 1, j + 1, count + 1)
            }

            // right
            if (j != word2.length - 1) {
                dfs(i, j + 1, count + 1)
            }
            // down
            if (i != word1.length - 1) {
                dfs(i + 1, j, count + 1)
            }


            // сделать после просчета

        }


        // dfs(0, 0, 0)
        // return minCount



        let i = 0
        let j = 0
        let count = 0

        let firstEl = [i, j, count]

        let queque = [firstEl]

        while (queque.length) {
            let [i, j, count] = queque.shift()
            if (i == word1.length - 1 && j == word2.length - 1) {
                minCount = Math.min(count, minCount)
            }
            let key = `${i}-${j}`
            if (memo.has(key)) {
                let memVal = memo.get(key)
                if (memVal < count) {
                    continue
                }
            }
            else {
                memo.set(key, count)
            }

            if (i < word1.length - 1) {
                let node = [i + 1, j, count + 1]
                queque.push(node)
            }

            if (j < word2.length - 1) {
                let node = [i, j + 1, count + 1]
                queque.push(node)
            }

            let charW1 = word1[i]
            let charW2 = word2[j]
            if (i < word1.length - 1 && j < word2.length - 1) {
                let node

                if (charW1 == charW2) {
                    node = [i + 1, j + 1, count]
                }
                else {
                    // 
                    node = [i + 1, j + 1, count + 1]
                }
                queque.push(node)
            }
        }

        return minCount



    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


word1 = "monkeys", word2 = "money"

word1 = "neatcdee", word2 = "neetcode"



console.log('::: ', sol.minDistance(word1, word2)); 