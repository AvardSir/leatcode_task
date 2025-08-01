class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.includes(t)) {
            return t
        }
        let i = 0
        let start = 0
        let end = 0
        let l = 0, r = 0

        let s_Array = Array.from(s)

        let t_map = new Map()
        let t_count = t.length

        // словарь t
        for (let i = 0; i < t.length; i++) {
            const element = t[i];
            if (!t_map.has(element)) {
                t_map.set(element, 1)
            }
            else {
                t_map.set(element, t_map.get(element) + 1)
            }

        }
        let t_map_copy = new Map(t_map)

        // в начале найдем 1й элемент слева в t и в s
        for (let i = 0; i < s.length - 1; i++) {
            const element = s[i];
            if (t_map_copy.has(element)) {
                start = i
                end = i + 1
                r = i + 1
                l = i
                t_count--
                t_map_copy.set(element, t_map_copy.get(element) - 1)
                break
            }

        }

        let len_min = Infinity
        let minL = 0, minR = 0
        while (l < s.length - 1) {
            if (l == 11) {
                let as = 2
            }

            ({ r, end, t_count, len_min, minL, minR } = this.rMove(r, s, t_map, end, t_map_copy, t_count, start, len_min, minL, minR));
            if (l == 11) {
                let asd2 = 1
            }
            ({ l, r, start, t_count, len_min, minL, minR } = this.leftMove(l, r, t_map, s, t_map_copy, start, t_count, end, len_min, minL, minR))
        }
        if ((minL == minR && minL == 0) && s[0] != t) {
            return ''
        }
        return s.slice(minL, minR + 1)


    }

    leftMove(l, r, t_map, s, t_map_copy, start, t_count, end, len_min, minL, minR) {

        let s_Array = Array.from(s)
        while (l < r) {
            const l_elem = s[l]

            if (t_map_copy.has(s[l])) {
                t_map_copy.set(s[l], t_map_copy.get(s[l]) + 1)

                start = l
                if (t_map_copy.get(s[l]) > 0) {
                    t_count++
                    if (t_count == 1) {
                        let len_cur = end - (start) + 1
                        if (len_cur < len_min) {
                            len_min = len_cur
                            minL = start, minR = end
                        }
                    }

                    for (let j = l + 1; j < r; j++) {
                        const el_left_move = s[j]
                        if (t_map_copy.has(el_left_move)) {
                            start = j
                            l = j
                            return { l, r, start, t_count, len_min, minL, minR }
                        }
                    }
                }

                // Блок ниже закомпенитл. проверь
                // 3 start
                // 10 end переход.
                // у него была ошибка
                // else {
                //     let len_cur = end - (start) + 1
                //     if (len_cur < len_min) {
                //         len_min = len_cur
                //         minL = start, minR = end
                //     }
                //     // return { l, r, start, t_count, len_min, minL, minR }

                // }

            }
            l++
        }
        return { l, r, start, t_count, len_min, minL, minR }
    }

    rMove(r, s, t_map, end, t_map_copy, t_count, start, len_min, minL, minR) {

        let s_Array = Array.from(s)
        while (r < s.length) {
            let r_el = s[r]
            // а повторы как обработать? XXXX надо бы занести кудато
            if (t_map_copy.has(s[r])) {
                end = r
                if (t_map_copy.get(s[r]) > 0) {
                    t_count--
                }
                t_map_copy.set(s[r], t_map_copy.get(s[r]) - 1)


            }
            if (t_count == 0) {
                end = r

                // end как то равен start
                // подсчитатть что? длину
                let len_cur = end - start + 1
                if (len_cur < len_min) {
                    len_min = len_cur
                    minL = start, minR = end

                }
                r++
                return { r, end, t_count, len_min, minL, minR }


            }
            r++
        }
        return { r, end, t_count, len_min, minL, minR }
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

