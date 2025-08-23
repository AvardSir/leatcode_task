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
        // console.log('word::: ', word);
        function dfs(childMap, i) {
            i++

            while (i != word.length) {
                let curChar = word[i]
                if (curChar == '.') {
                    console.log('word::: ', word);

                    console.log('curC222har::: ', curChar);
                    return [true, i + 1]
                }
                if (childMap.has(curChar)) {

                }
                else {
                    return [false, i]
                }
                // console.log('childMap::: ', childMap);

                childMap = childMap.get(curChar).ElMp
                i++
            }
            return [true, i]
        }
        let i = 0
        let curNode = this.TrNode
        let curMap = curNode.ElMp
        let curChar
        let children
        while (i != word.length) {
            curChar = word[i]
            if (curChar == '.') {
                let flag = false
                children = Array.from(curMap.entries())
                for (let j = 0; j < children.length; j++) {
                    const childMap = children[j][1].ElMp;
                    // console.log('childMap::: ', childMap);
                    let [isDfs, i_Dfs] = dfs(childMap, i)
                    if (isDfs) {

                        i = i_Dfs

                        flag = true

                        break
                    }

                }
                if (!flag) {
                    // console.log('flag::: ', flag);
                    return false
                }
                if (i == word.length) {
                    console.log('word::: ', word);
                    console.log('word::: ', word.length);

                    console.log('i::: ', i);
                    console.log('i == word.length::: ', i == word.length);
                    return true
                }
                // continue
            }
            else if (!curMap.has(curChar)) {
                return false
            }

            curNode = curMap.get(curChar)
            // console.log('curNode::: ', curNode);
            curMap = curNode.ElMp


            i++

        }
        if (curNode.IsEnd) {
            return true
        }
        else {
            console.log('curNode.IsEnd::: ', curNode.IsEnd);

            false
        }

    }
}
