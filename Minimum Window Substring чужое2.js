class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let countT = {};
        let window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0, need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let elemt_r = s[r];
            window[elemt_r] = (window[elemt_r] || 0) + 1;

            if (countT[elemt_r] && window[elemt_r] === countT[elemt_r]) {
                have++;
            }

            while (have === need) {
                let elemt_l = s[l];
                if ((r - l + 1) < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[elemt_l]--;
                if (countT[elemt_l] && window[elemt_l] < countT[elemt_l]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
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

