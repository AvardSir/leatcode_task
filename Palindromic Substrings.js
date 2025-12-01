class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    countSubstrings(s) {
        function isPolid(curStr) {
            // let ar=[1,2]
            // // ar.length
            let l = 0
            let r = curStr.length - 1

            while (l < r) {
                if (curStr[l] != curStr[r]) {
                    return false
                }
                l++
                r--
            }
            return true

        }
        // let curStr = 'abab'
        // isPolid(curStr)
        // console.log('isPolid(curStr)::: ', isPolid(curStr));

        let count = 0

        let maxStr = ''
        for (let i = 0; i < s.length; i++) {
            const element = s[i];

            let diap = 0
            let j = i
            while (true) {
                let l = j - diap
                let r = i + diap
                if (l < 0 || r > s.length - 1) {
                    break
                }

                let curStr = s.slice(l, r + 1)
                if (!isPolid(curStr)) {
                    break
                }
                count++
                // if (curStr.length > maxStr.length) {
                //     maxStr = curStr
                // }

                diap++
            }
            j = i - 1
            if (j < 0) {
                continue
            }

            diap = 0
            while (true) {
                let l = j - diap
                let r = i + diap
                if (l < 0 || r > s.length - 1) {
                    break
                }

                let curStr = s.slice(l, r + 1)
                if (!isPolid(curStr)) {
                    break
                }
                count++
                // if (curStr.length > maxStr.length) {
                //     maxStr = curStr
                // }

                diap++
            }

        }
        return count
        // todo отладить я даж не запускал
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()



s = "ababd"
s = "abbc"
s = "aaa"
console.log(' ::: ', sol.countSubstrings(s));