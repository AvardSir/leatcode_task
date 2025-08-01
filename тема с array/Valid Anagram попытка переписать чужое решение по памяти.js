class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    static isAnagram(s, t) {
        if (s.length!=t.length) {return false
            
        }
        const arr_alpgabet=Array.from({length:26},_=>0)
        const a_='a'.charCodeAt()
        s=s.toLowerCase()
        t=t.toLowerCase()
        for (let i = 0; i < s.length; i++) {
            
            arr_alpgabet[s[i].charCodeAt()-a_]+=1
            arr_alpgabet[t[i].charCodeAt()-a_]-=1
            
        }
        for (const i of arr_alpgabet) {
            if (i!=0) {
                return false
            }
        }
        return true
    }
}
// рабочее решение юзая лист из числа в код. это как маассив. КРУТОО
s = "racecar", t = "carrace"
Solution.isAnagram(s, t)
console.log('Solution.isAnagram(s, t)::: ', Solution.isAnagram(s, t));