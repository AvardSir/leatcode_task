class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        if (s.length == 1) {
            return [[s]]
        }
        let dp = Array.from({ length: s.length }, v => [])
        dp[0].push(s[0])
        let check = 1

        function isPolind(curStr) {

            let l = 0, r = curStr.length - 1
            while (l < r) {
                if (curStr[l] != curStr[r]) {
                    return false
                }
                l++
                r--
            }
            return true
        }
        let s2 = 'aba'

        // isPolind(s)
        console.log('isPolind(s)::: ', isPolind(s2));

        for (let i = 1; i < s.length; i++) {
            const element = s[i];

            for (let j = 0; j < dp[i - 1].length; j++) {
                // const element = dp[j];



                dp[i].push([...dp[i - 1][j], element])

            }

            let start = i - 1
            let end = i
            if (end == 2) {
                let chekc = 1
            }
            while (true) {
                if (start < 0) {
                    break
                }
                let curCurStr = s.slice(start, end + 1)
                if (curCurStr == 'bab') {
                    let cheak1 = 1
                }
                if (isPolind(curCurStr)) {
                    if (start == 0) {
                        dp[end].push([curCurStr])
                        break
                    }
                    // добавить вариант
                    for (let j = 0; j < dp[start - 1].length; j++) {
                        // const element = dp[j];

                        dp[end].push([...dp[start - 1][j], curCurStr])

                    }

                }
                start--
            }




        }

        return dp[s.length - 1]
    }
}


s = "fff"

let sol = new Solution()
s = "a"

s = "efe"
s = "fff"
s = "abbab"

console.log(' ::: ', sol.partition(s));