
class ElTree {
    constructor(char) {
        this.char = char
        this.ElMp = new Map()

    }
}
class PrefixTree {
    constructor() {
        this.EllTree = new ElTree('')
        this.st = new Set()
        this.prevWord = ''
    }


    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (word == '') {
            return
        }
        this.prevWord = word
        this.st.add(word)

        let i = 0
        let curNode
        if (this.EllTree.ElMp.has(word[i])) {

        }
        else {
            this.EllTree.ElMp.set(word[i], new ElTree(word[i]))
        }

        curNode = this.EllTree.ElMp.get(word[i])
        i++

        while (i != word.length) {
            let curChar = word[i]
            let curMap = curNode.ElMp
            if (curMap.has(curChar)) {

            }
            else {
                curMap.set(curChar, new ElTree(curChar))
            }

            curNode = curMap.get(curChar)
            i++
        }

        return

    }


    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if (this.st.has(word)) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        // console.log('prefix::: ', prefix);
        // console.log('this.prevWord::: ', this.prevWord);

        // i5
        // if (prefix.length > this.prevWord.length) {
        //     return false
        // }

        let i = 0
        let curChar
        let curMap = this.EllTree.ElMp
        let curNode
        while (i != prefix.length ) {
            curChar = prefix[i]
            if (curMap.has(curChar)) {

            }
            else {
                // curMap.set(curChar, new ElTree(curChar))
                return false
            }
            curNode = curMap.get(curChar)
            curMap = curNode.ElMp

            i++
        }
        return true
    }
}

