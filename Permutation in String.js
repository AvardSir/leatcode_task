class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map_s1 = new Map()
        for (let i = 0; i < s1.length; i++) {
            const el_s1 = s1[i];
            if (!map_s1.has(el_s1)) {
                map_s1.set(el_s1, 1)
            }
            else {
                map_s1.set(el_s1, map_s1.get(el_s1) + 1)
            }

        }
        // 0 1 2
        // a b c
        let l = 0, r = s1.length
        while (r <= s2.length ) {
            let map_s2 = new Map()
            if (l == 1) {
                let asf = 23
            }
            for (let i = l; i < r; i++) {
                const el_s2 = s2[i];
                if (!map_s2.has(el_s2)) {
                    map_s2.set(el_s2, 1)
                }
                else {
                    map_s2.set(el_s2, map_s2.get(el_s2) + 1)
                }
            }


            if (is_map_iquel(map_s1,map_s2)) {
                return true
            }


            l++
            r++
        }
        return false
        let pas = 12

        function is_map_iquel(map_s1,map_s2) {
            // let flag = true;

            if (map_s1.size != map_s2.size) {
                return false;
            }
            let cur_ar1 = Array.from(map_s1);
            cur_ar1 = cur_ar1.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
            let cur_ar2 = Array.from(map_s2);
            's'.charCodeAt();
            cur_ar2 = cur_ar2.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());

            for (let i = 0; i < cur_ar1.length; i++) {
                for (let j = 0; j < 2; j++) {
                    const element = cur_ar1[i][j];
                    const element2 = cur_ar2[i][j];
                    if (element != element2) {
                        return false;

                    }

                }

            }
            return true;
        }
    }
}



// 2й вариант

// 
a = new Solution()
// 

s1 = "abc", s2 = "lecabee"
s1 = "ab"
s2 = "lecabee"
s1 = "hello"
s2 = "ooolleoooleh"


s1 = "abc"
s2 = "lecaabee"

s1 = "ab"
s2 = "lecabee"

s1 = "ab"
s2 = "eidbaooo"

s1 = "adc"
s2 = "dcda"

console.log('Задача ответ::: ', a.checkInclusion(s1, s2));

