class TreeNode {
    constructor() {
        this.ElMp = new Map()
        this.IsEnd = false
    }
}
class WordDictionary {
    constructor() {
        this.TrNode = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        if (word == '') {
            return
        }
        let i = 0
        let curNode = this.TrNode
        let curMap = curNode.ElMp
        let curChar = word[i]
        while (i != word.length) {
            curChar = word[i]
            if (!curMap.has()) {
                curMap.set(curChar, new TreeNode())
            }

            curNode = curMap.get(curChar)
            curMap = curNode.ElMp
            i++
        }
        curNode.IsEnd = true

    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let global_Is_have = false
        // console.log('word::: ', word);
        function dfs(curNode, i) {
            if (global_Is_have) {
                return
            }
            let curMap = curNode.ElMp
            let curChar = word[i]

            while (i != word.length) {
                curChar = word[i]
                if (curChar == '.') {
                    let children = Array.from(curMap.entries())

                    for (let j = 0; j < children.length; j++) {
                        const childNode = children[j][1];
                        console.log('childNode::: ', childNode);
                        console.log('i::: ', i);
                        // тут гдет проблемы

                        dfs(childNode, i)
                    }
                }
                if (!curMap.has(curChar)) {
                    return
                }
                curNode = curMap.get(curChar)
                curMap = curNode.ElMp
                i++
            }
            if (curNode.IsEnd) {
                global_Is_have = true
            }
            return

        }
        let i = 0
        let curNode = this.TrNode
        dfs(curNode, i)
        return global_Is_have


    }
}
