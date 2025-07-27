class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s == '') {
            return ''
        }
        let t_map = {}
        for (const i of t) {
            t_map[i] = (t_map[i] || 0) + 1
        }
        let need = Object.keys(t_map).length

        let window = {}
        let have = 0
        let l = 0

        let minLen = Infinity
        let curAns = [-1, -1]
        for (let r = 0; r < s.length; r++) {
            const el_r = s[r];
            window[el_r] = (window[el_r] || 0) + 1
            if (t_map[el_r] && window[el_r] == t_map[el_r]) {
                have++
            }

            while (need == have) {
                const el_l = s[l];
                if ((r - l + 1) < minLen) {
                    minLen = r - l + 1
                    curAns = [l, r]
                }
                if (l==11) {
                    let a21=1
                }
                window[el_l]--
                if (t_map[el_l] && window[el_l] < t_map[el_l]) {
                    have--
                }


                l++
            }


        }
        // curAns[0], curAns[1] = [l, r]
        return minLen == Infinity ? '' : s.slice(curAns[0], curAns[1] + 1)

        let as = 21


    }
}


// 
a = new Solution()
// 

s = "OUZODYYXAZV", t = "XYYZ"

// s = "a"
// t = "a"

// s = "abc"
// t = "ac"

// s = "aaaaaaaaaaaabbbbbcdd"
// t = "abcdd"
s = "ADOBECODEBANC"
t = "ABC"
s = "ab"
t = "a"

s = "aaaaaaaaaaaabbbbbcdd"
t = "abcdd"

console.log('Задача ответ::: ', a.minWindow(s, t));

