class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) {
            return 0

        }
        let char_set = new Set()
        let max = 1
        for (let i = 0; i < s.length; i++) {
            const el = s[i];
            if (!char_set.has(el)) {
                char_set.add(el)
            }

            else {
                max = max < char_set.size ? char_set.size : max
                for (let j = i - char_set.size; j < i + char_set.size; j++) {
                    const el_set = s[j];
                    if (el_set == el) {
                        for (let k = i - char_set.size; k < j + 1; k++) {
                            const el_for_del = s[k];
                            char_set.delete(s[k])

                        }
                        char_set.add(el)
                        break
                        // let cur_str=s.slice(j+1,i+char_set.length)
                    }
                }
            }




        }
        max = max < char_set.size ? char_set.size : max

        return max
    }
}





// 
a = new Solution()
// 

s = "zxyzxyz"
s = "xxxx"
s = "pwwkew"
s="au"
// s = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3"

console.log('Задача ответ::: ', a.lengthOfLongestSubstring(s), '   а надо 21');

