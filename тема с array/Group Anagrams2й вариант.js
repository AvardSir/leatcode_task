class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    static groupAnagrams(strs) {
        if (strs.length == 1) {
            return [strs]
        }
        // 'af'.length
        // 1 сделатьт isAnagrma
        function isAnagrma(s, t) {
            if (s.length != t.length) {
                return false

            }
            let arra_alphabet = Array.from({ 'length': 26 }, (_ => 0))
            let str_test = '123'
            s = s.toLowerCase()
            t = t.toLowerCase()

            const a_cod = 'a'.charCodeAt()
            for (let i = 0; i < s.length; i++) {
                arra_alphabet[s[i].charCodeAt() - a_cod]++
                arra_alphabet[t[i].charCodeAt() - a_cod]--

            }
            return arra_alphabet.every(x => x == 0)


        }
        // test
        // let s='abcc'
        // let  t='cba'
        // isAnagrma(s,t)
        // console.log('isAnagrma(s,t)::: ', isAnagrma(s,t));
        // 2 придумать логику
        // 3 реализовать
        let str_sort_elem = []
        let test_str = 'ba'.split('').sort().join('')
        for (let i = 0; i < strs.length; i++) {

            str_sort_elem[i] = [strs[i].split('').sort().join(''), i]


        }
        str_sort_elem = str_sort_elem.sort()
        //пройтись повторы
        let start = 0
        let answer = []
        let temp = []
        for (let i = 1; i < str_sort_elem.length; i++) {

            if (str_sort_elem[i][0] != str_sort_elem[i - 1][0]) {
                temp = []
                for (let j = start; j < i ; j++) {

                    temp.push(strs[str_sort_elem[j][1]])
                }
                answer.push(temp)
                start = i
            }
        }
        temp = []
        for (let j = start; j < str_sort_elem.length ; j++) {

            temp.push(strs[str_sort_elem[j][1]])
        }
        answer.push(temp)
        return answer
    }
}

// решение череез сортировку! работает!
strs = ["act", "pots", "tops", "cat", "stop", "hat"]
strs = ["x"]

output = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
// Solution.groupAnagrams(strs)
console.log('Solution.groupAnagrams(strs)::: ', Solution.groupAnagrams(strs));
Solution.groupAnagrams(strs) == output
console.log('тест 1 прав?::: ', Solution.groupAnagrams(strs) == output);