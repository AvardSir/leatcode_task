class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    static groupAnagrams(strs) {

        function str_to_list_of_alpabet(str) {
            let res = Array.from({ length: 26 }, x => 0)
            const a_code = 'a'.charCodeAt()
            for (let i = 0; i < str.length; i++) {
                const element = str[i];
                res[str[i].charCodeAt() - a_code]++

            }
            return res
        }
        let test_str = 'abbc'
        // str_to_list_of_alpabet(test_str)
        // console.log('str_to_list_of_alpabet(test_str)::: ', str_to_list_of_alpabet(test_str));
        let res = new Map()
        let answ = []
        for (const i of strs) {
            const temp_str_to_list_of_alpabet = JSON.stringify(str_to_list_of_alpabet(i))
            if (res.has(temp_str_to_list_of_alpabet)) {
                res.get(temp_str_to_list_of_alpabet).push(i)

            }
            else {
                res.set(temp_str_to_list_of_alpabet, [i])
            }

        }
        return Array.from(res.values())
    }
}

// решение череез сортировку! работает!
strs = ["act", "pots", "tops", "cat", "stop", "hat"]
// strs = ["x"]

output = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
// Solution.groupAnagrams(strs)
console.log('Solution.groupAnagrams(strs)::: ', Solution.groupAnagrams(strs));
// Solution.groupAnagrams(strs) == output
// console.log('тест 1 прав?::: ', Solution.groupAnagrams(strs) == output);