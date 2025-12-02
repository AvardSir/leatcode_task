class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        function isTwoCharsValid(str) {

            let aa = str[0]
            let intA = Number(aa)
            if (aa == '0' || intA > 2) {
                return false
            }
            // let intB = Number(b)


            let b = str[1]

            let ab = aa + b

            let intAb = Number(ab)
            if (0 < intAb && intAb < 27) {
                return true
            }
            return false



        }


        if (s[0] == '0' ) {
            return 0
        }
        let a = 1
        let b = a
        let d = 0

        let f = 1
        let c = a * f + b * d

        for (let i = 1; i < s.length; i++) {
            f = 1
            const char = s[i];
            if (char == '0') {
                // a = 0
                f = 0
            }
            let l = s[i - 1]
            let r = s[i]
            let lr = l + r

            if (!isTwoCharsValid(lr)) {
                d = 0
            }
            else {
                d = 1
            }
            c = a * f + b * d
            b = a
            a = c
            // b = a
            // a = b
            // b = c

        }

        return c
        // let chekstr = '10'
        return isTwoCharsValid(chekstr)
    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()



s = "ababd"
s = "abbc"
s = "aaa"
s = "12"

// s = "226"
s = "06"
s = "10"
// 
// s = "1123"
// s = "27"

// s = "12"
// s = "2101"

// s = "301"

// s = "10"

s = "0"

s = "1123"

// s = "12"

s = "1"
console.log(' ::: ', sol.numDecodings(s));