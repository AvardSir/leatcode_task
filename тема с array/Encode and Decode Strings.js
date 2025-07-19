class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) {
            return ''
        }
        let total = ''
        for (const i of strs) {
            total += i + '@s@'
        }
        // total = total.slice(1, total.length)
        return total
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length == 0) {
            return []
        }
        let start = 0
        let ans = []
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            if (str[i] == '@') {
                if (i + 2 <= str.length) {
                    if (str[i + 1] == 's' && str[i + 2] == '@') {
                        ans.push(str.slice(start, i))
                        start = i + 3

                    }
                }

            }
        }
        // ans.push(str.slice(start, str.length))

        return ans

    }
}
// new Solution.encode(['a','b'])
a = new Solution()
tescae1 = ["neet", "code", "love", "you"]
// tescae1=[""]

let str_ = a.encode(tescae1)
// a.decode(str_)
console.log('a.decode(str_)::: ', a.decode(str_));

// a.decode()
