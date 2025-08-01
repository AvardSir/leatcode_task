class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 3#bla
        let total = ''
        for (const i of strs) {
            total += i.length + '@'+i
        }
        return total
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0
        let j=0
        let ans=[]
        let len=0
        while (i <str.length) {
            j=i
            while (str[j]!='@') {
                j++
            }
            len=parseInt(str.slice(i,j))
            i=j+1
            j=i+len
            ans.push(str.slice(i,j))
            i=j
        }
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
