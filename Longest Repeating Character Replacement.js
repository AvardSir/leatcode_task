class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let s_ar=Array.from(s)
        let apha_map = new Map()

        for (let i = 0; i < s.length; i++) {
            const el = s[i];
            if (!apha_map.has(el)) {
                apha_map.set(el, 1)
            }
            else {
                apha_map.set(el, apha_map.get(el) + 1)
            }
        }
        let ar = (Array.from(apha_map))
        if (ar.length == 1) {
            return ar[0][1]

        }
        ar = ar.sort((a, b) => b[1] - a[1])

        let max = 0
        for (let i = 0; i < ar.length; i++) {
            const el = ar[i];
            let len_windows = el[1] + k
            let char_i = el[0]
            if (char_i=='B') {
                let a2=1
            }

            let l = 0, r = len_windows - 1, cur_k = k, cur_len = 0
            while (r <= s.length - 1) {
                cur_len = 0
                cur_k=k
                for (let z = l; z <= r; z++) {
                    if (l==3) {
                        let afs=2
                    }
                    const el_in_window = s[z];
                    if (el_in_window != char_i) {
                        if (cur_k != 0) {
                            cur_k--
                            cur_len++

                        }
                        else {
                            break
                        }
                    }
                    else {
                        cur_len++
                    }
                }
                max = max < cur_len ? cur_len : max
                l++
                r++
            }

            // const el = ar[i];
            // len_windows = el[1] + k
            // char_i = el[0]
            // cur_k = k, cur_len = 0
            // let l = 0, r = len_windows - 1
            // r--
            let last_l = l
            len_windows = r - l+k
            for (let p = len_windows; p > 1; p--) {
                // const element = array[p];
                len_windows = p
                l = last_l
                r = l + len_windows - 1
                if (len_windows==9) {
                    let ags2=a
                    
                }
                cur_k=k
                let asfa='AAAAABBBBCBB'.length
                while (r <= s.length - 1) {
                    cur_len = 0
                    for (let z = l; z <= r; z++) {
                        const el_in_window = s[z];
                        if (el_in_window != char_i) {
                            if (cur_k != 0) {
                                cur_k--
                                cur_len++

                            }
                            else {
                                break
                            }
                        }
                        else {
                            cur_len++
                        }
                    }
                    max = max < cur_len ? cur_len : max
                    l++
                    r++
                }

            }


        }
        return max
        let pas = 12

    }
}





// 
a = new Solution()
// 

s = "XYYYYYXYYYYYXXXXX", k = 2
s = "AAABABB", k = 1
s = "AAAA"
k = 2

s = "AABABBA"
k = 1
s = "ABAA"
k = 0

s = "ABBB"
k = 2

s="AAAAABBBBCBB"
k=3
console.log('Задача ответ::: ', a.characterReplacement(s, k));

