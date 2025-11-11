class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {

        if (words.length == 1) {
            return words[0]
        }

        let chars = new Map()
        function aBigerB(a, b) {

            if (!chars.has(a)) {
                chars.set(a, [new Set(), new Set()])

            }
            if (!chars.has(b)) {
                chars.set(b, [new Set(), new Set()])

            }
            let aArSet = chars.get(a)
            let aChildSet = aArSet[1]
            aChildSet.add(b)

            // let bSet = chars.get(b)
            let BArSet = chars.get(b)
            let bParentSet = BArSet[0]
            bParentSet.add(b)

            let chek = 1

        }

        // let comparedNodesSet = new Set()

        let isAlBad = false
        function compareTwoStr(a, b) {


            let mimLe = a.length < b.length ? a.length : b.length
            let l = 0, r = 0
            while (l < mimLe) {

                let LChar = a[l]
                let RChar = b[r]

                if (LChar != RChar) {
                    // LChar
                    // a, b
                    aBigerB(LChar, RChar)
                    // comparedNodesSet.add(LChar)
                    // comparedNodesSet.add(RChar)
                    return
                }

                l++
                r++
            }
            if (a.length > b.length) {
                isAlBad = true
                return
            }
            if (a.length == b.length) {
                if (!chars.has(a)) {
                    chars.set(a, [new Set(), new Set()])

                }
            }


        }
        for (let i = 0; i < words.length; i++) {
            let a = words[i];

            for (let j = i + 1; j < words.length; j++) {
                let b = words[j];
                compareTwoStr(a, b)
                if (isAlBad) {
                    return ''
                }
            }
        }

        let setNotCompared = new Set()
        for (let i = 0; i < words.length; i++) {
            const wordI = words[i];
            for (let j = 0; j < wordI.length; j++) {
                const charI = wordI[j];
                if (!chars.has(charI)) {
                    setNotCompared.add(charI)
                }

            }

        }
        let visitSet = new Set()
        let isCycle = false
        let totalStr = ''
        let itWasOnce = new Set()
        function reversDfs(i) {
            if (visitSet.has(i)) {
                isCycle = true
            }
            if (isCycle) {
                return
            }

            if (!chars.has(i)) {
                totalStr += i
                return
            }
            let charAr = chars.get(i)
            let paretnSet = charAr[0]
            let childrenSet = charAr[1]
            let childrenAr = Array.from(childrenSet)

            visitSet.add(i)
            for (let j = 0; j < childrenAr.length; j++) {
                const element = childrenAr[j];
                if (itWasOnce.has(element)) {
                    // itWasOnce.has(i)
                    continue
                }
                reversDfs(element)
                if (isCycle) {
                    return
                }

            }
            visitSet.delete(i)
            if (!itWasOnce.has(i)) {
                totalStr += i
                itWasOnce.add(i)
            }




        }
        let alParent = []
        function findParent() {
            let charsAr = Array.from(chars)
            for (let i = 0; i < charsAr.length; i++) {
                const element = charsAr[i];
                let key = element[0]
                let val = element[1]
                let parentsSet = val[0]
                if (parentsSet.size == 0) {
                    alParent.push(key)
                }

            }
        }
        findParent()

        function reversStr(str) {
            let reverSStre = ''
            for (let i = 0; i < str.length; i++) {
                const element = str[i];

                reverSStre = element + reverSStre
            }
            return reverSStre
        }

        let alAltotalstr = ''
        if (alParent.length == 0 && chars.size != 0) {
            return ''
        }
        for (let i = 0; i < alParent.length; i++) {
            const element = alParent[i];
            totalStr = ''

            reversDfs(element)
            if (isCycle) {
                return ''
            }
            alAltotalstr = alAltotalstr + reversStr(totalStr)
        }


        // setNotCompared
        let arrNotCompared = Array.from(setNotCompared)
        for (let i = 0; i < arrNotCompared.length; i++) {
            const element = arrNotCompared[i];
            alAltotalstr += element

        }

        return alAltotalstr
        let chek = 1
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
// words = ["abc", "bcd", "cde"]

// words = ["wrtkj", "wrt"]

// words = ["baa", "abcd", "abca", "cab", "cad"]
// words = ["baa", "abcd", "abca", "cab", "cad"]
// words = ["abcdefgh", "bdefghij", "cghij", "dfghij", "efghij", "fghij", "ghij", "hij", "ij", "j", "abcdefghi", "bdefghijk", "cghijk", "dfghijk", "efghijk", "fghijk", "ghijk", "hijk", "ijk", "jk", "k"]
// words = ["z", "z"]

// words = ["z"]
// words = ["axc", "axb", "axa", "awc", "awb", "awa", "avc", "avb", "ava", "auc", "aub", "aua", "atc", "atb", "ata", "asc", "asb", "asa", "arc", "arb", "ara", "aqc", "aqb", "aqa", "apc", "apb", "apa", "aoc", "aob", "aoa", "anc", "anb", "ana", "amc", "amb", "ama", "alc", "alb", "ala", "akc", "akb", "aka", "ajc", "ajb", "aja", "aic", "aib", "aia", "ahc", "ahb"]

// words = ["ax", "bx", "cx", "dx", "ex", "fx", "gx", "hx", "ix", "jx", "kx", "lx", "mx", "nx", "ox", "px", "qx", "rx", "sx", "tx", "ux", "vx", "wx", "xx", "yx", "zx"]
// в началах есть одни и теже буквы

words = ["abc", "bcd", "cde"]
words = ["wrtkj", "wrt"]

words = ["mnop", "nopq", "opqr", "pqrs", "qrst", "rstu", "stuv", "tuvw", "uvwx", "vwxy", "wxyz", "xyz", "yz", "z", "mnopqr", "nopqrs", "opqrst", "pqrstu", "qrstuv", "rstuvw", "stuvwx", "tuvwxy", "uvwxyz", "vwxyz", "wxyza", "xyzab", "yzabc", "zabcd"]
words = ["z", "z"]

words = ["a", "aa", "aaa"]

words = ["ax", "bx", "cx", "dx", "ex", "fx", "gx", "hx", "ix", "jx", "kx", "lx", "mx", "nx", "ox", "px", "qx", "rx", "sx", "tx", "ux", "vx", "wx", "xx", "yx", "zx"]


console.log(' ::: ', sol.foreignDictionary(words));