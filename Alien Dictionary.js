class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        if (words.length == 1) {
            return words[0]
        }
        function checkWordOnsmalerLexiPravilo() {
            for (let i = 0; i < words.length - 1; i++) {
                // const element = words[i];
                let a = words[i];
                let b = words[i + 1]

                function compareTwoWord(a, b) {
                    if (a.length >= b.length) {
                        return true
                    }
                    let l = 0, r = 0
                    while (l < a.length) {

                        let curCharL = a[l]
                        let curCharR = b[r]

                        if (curCharL != curCharR) {
                            return true
                        }
                        l++
                        r++
                    }
                    return false
                }
                if (!compareTwoWord(b, a)) {
                    return false
                }


            }
            return true
        }
        // let chek = 
        if (!checkWordOnsmalerLexiPravilo()) {
            return ''
        }
        // let a = 'a'

        // let b = 'b'



        let chars = new Map()
        function aBigerB(a, b) {

            let [AparentSet, AchildrenSet] = chars.get(a)
            let [BparentSet, BchildrenSet] = chars.get(b)
            BparentSet.add(a)
            AchildrenSet.add(b)
            let chek = 1

        }
        // aBigerB(a, b)
        function compareTwoWords(a, b) {
            let l = 0, r = 0
            let smalerLen = a < b ? a.length : b.length

            while (l < smalerLen) {
                let leftEl = a[l]
                let rigEl = b[r]

                // воще хз
                // chars.add(leftEl)
                // chars.add(rigEl)

                // let a = leftEl
                // let b = rigEl
                if (!chars.has(leftEl)) {
                    chars.set(leftEl, [new Set(), new Set()])
                    // [parentSet, childrenSet]
                }
                if (!chars.has(rigEl)) {
                    chars.set(rigEl, [new Set(), new Set()])
                }
                // воще хз

                if (leftEl != rigEl) {

                    aBigerB(leftEl, rigEl)
                    return
                }

                l++
                r++
            }
        }
        // let a = 'aac'
        // let b = 'babc'
        // let chek2323 = compareTwoWords(a, b)
        let che251215k = 1

        chars
        for (let i = 0; i < words.length - 1; i++) {
            for (let z = i + 1; z < words.length; z++) {
                let el1 = words[i]
                const el2 = words[z];
                let a = words[i];
                let b = words[i + 1];

                compareTwoWords(el1, el2)
            }
            // let a = words[i];
            // let b = words[i + 1];

            // compareTwoWords(a, b)
            // compareTwoWords(a, b)
        }
        let charAR = Array.from(chars)
        let parentsOfAl = []
        function findParentAll() {
            for (let i = 0; i < charAR.length; i++) {
                const element = charAR[i];
                let key = element[0]
                let val = element[1]

                let parents = val[0]
                let childrens = val[1]
                if (parents.size == 0) {
                    parentsOfAl.push(key)
                    // return key
                }
                let chdk = 1

            }
        }

        let parentalI = findParentAll()
        parentsOfAl
        if (parentsOfAl.length == 0) {
            return ''
        }
        let chekParne = 1
        let visitCycle = new Set()
        let isFindCycle = false
        function dfsTofindCycles(curChar) {
            if (visitCycle.has(curChar)) {
                isFindCycle = true
                return
            }
            if (isFindCycle) {
                return
            }

            let setChilde = chars.get(curChar)
            let childere = setChilde[1]

            if (setChilde.length == 0 || childere.size == 0) {
                return
            }

            visitCycle.add(curChar)

            // let childere = setChilde[1]
            let childreAr = Array.from(childere)
            for (let i = 0; i < childreAr.length; i++) {
                const element = childreAr[i];
                dfsTofindCycles(element)
                let qoyo = 1

            }
            visitCycle.delete(curChar)

        }
        // chars.get('e')[1].add('h')
        for (let i = 0; i < parentsOfAl.length; i++) {
            const curParent = parentsOfAl[i];
            let What = dfsTofindCycles(curParent)
            if (isFindCycle) {
                return ''
            }

        }
        // let ooo = isFindCycle

        function revrseStr(str) {
            let newStr = ''
            for (let i = 0; i < str.length; i++) {
                const element = str[i];
                newStr = element + newStr

            }
            return newStr
        }
        // сделать функцию которая соберает все старотовые точки
        // затем прогнать это по всем стартовым точкам

        let visiSet = new Set() //?
        let totalStr = ''
        function reversDfs(i) {

            if (!chars.has(i)) {
                totalStr += i
            }
            // TODO: тут

            let curArChild = Array.from(chars.get(i)[1])
            for (let i = 0; i < curArChild.length; i++) {
                let element = curArChild[i];

                reversDfs(element)


            }
            if (!visiSet.has(i)) {
                visiSet.add(i)
                totalStr += i


            }

            if (i == 'a') {
                let hchl = 1
            }




        }

        let alCharsSet = new Set()
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                const charI = word[j];

                alCharsSet.add(charI)
            }

        }

        let ans = ''
        for (let i = 0; i < parentsOfAl.length; i++) {
            const curParent = parentsOfAl[i];
            reversDfs(curParent)

            ans += revrseStr(totalStr)

        }
        alCharsSet = Array.from(alCharsSet)
        for (let i = 0; i < alCharsSet.length; i++) {
            const element = alCharsSet[i];
            if (!visiSet.has(element)) {
                ans += element
            }

        }
        return ans
        let chekeke = 1
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

grid = [
    [0, 1, 2, 10],
    [9, 14, 4, 13],
    [12, 3, 8, 15],
    [11, 5, 7, 6]
]


// words = ["hrn", "hrf", "er", "enn", "rfnn"]
words = ["hrn", "hrf", "er", "enn", "rfnn"]
words = ["abc", "bcd", "cde"]

words = ["wrtkj", "wrt"]

words = ["baa", "abcd", "abca", "cab", "cad"]
words = ["baa", "abcd", "abca", "cab", "cad"]
words = ["abcdefgh", "bdefghij", "cghij", "dfghij", "efghij", "fghij", "ghij", "hij", "ij", "j", "abcdefghi", "bdefghijk", "cghijk", "dfghijk", "efghijk", "fghijk", "ghijk", "hijk", "ijk", "jk", "k"]
words = ["z", "z"]

words = ["z"]
words = ["axc", "axb", "axa", "awc", "awb", "awa", "avc", "avb", "ava", "auc", "aub", "aua", "atc", "atb", "ata", "asc", "asb", "asa", "arc", "arb", "ara", "aqc", "aqb", "aqa", "apc", "apb", "apa", "aoc", "aob", "aoa", "anc", "anb", "ana", "amc", "amb", "ama", "alc", "alb", "ala", "akc", "akb", "aka", "ajc", "ajb", "aja", "aic", "aib", "aia", "ahc", "ahb"]

words = ["ax", "bx", "cx", "dx", "ex", "fx", "gx", "hx", "ix", "jx", "kx", "lx", "mx", "nx", "ox", "px", "qx", "rx", "sx", "tx", "ux", "vx", "wx", "xx", "yx", "zx"]
// в началах есть одни и теже буквы
console.log(' ::: ', sol.foreignDictionary(words));