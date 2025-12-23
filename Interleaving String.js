class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length != s3.length) {
            return false
        }
        let a = s1
        let b = s2
        let isTrue = false

        doStaf(a, b)
        if (isTrue) {
            return true
        }
        a = s2
        b = s1
        doStaf(a, b)
        if (isTrue) {
            return true
        }

        return false

        // выход
        function doStaf(a, b) {
            let curA = 0
            let curB = 0
            for (let i = 0; i < s3.length; i++) {
                const charS3 = s3[i];
                if (charS3 != a[curA]) {
                    if (charS3 != b[curB]) {
                        break
                    }
                    else {
                        curB++
                    }
                }
                else {
                    curA++
                }

            }
            if (curA == a.length && curB == b.length) {
                isTrue = true

            }

            return
        }






    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"

s1 = ""
s2 = ""
s3 = "a"

console.log('::: ', sol.isInterleave(s1, s2, s3)); 