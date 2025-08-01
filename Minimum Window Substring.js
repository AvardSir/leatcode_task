class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s==t) {
            return s
        }
        if (t.length==1) {
            for (const i of s) {
                if (i==t) {
                    return i
                }
            }
            return ''
        }
        // t в словарь
        let t_map = new Map()
        let t_map_count = t.length
        for (let i = 0; i < t.length; i++) {
            const el = t[i];
            // t_map_count++
            if (!t_map.has(el)) {
                t_map.set(el, 1)
            }
            else {
                t_map.set(el, t_map.get(el) + 1)
                // t_map_count++
            }

        }
        let pas = 21
        let min = s
        let isOneThrow=false

        for (let i = 0; i < s.length; i++) {
            const el = s[i];
            if (t_map.has(el)) {

                // начать расходиться влевоп вправо
                left_and_right(i, el);
            }

        }

        function left_and_right(i, el) {
            // а существенна ли разница если четное или 
            // нечетное количество символов
            // вроде нет
            let ara=Array.from(s)
            let l = i, r = 1 + i;

            let start = i, end = i;
            let t_map_copy = new Map(t_map);
            let t_map_count_copy = t_map_count;
            // t_map_copy.set(el, t_map_copy.get(el) - 1);
            let max = 0;
            if (el=='Y') {
                let asd=2
            }
            if (i==11) {
                let asd=2
            }
            let ans_ar = [];
            // это цикл который расходится влево и 
            // в право

            // пройдись смотри как работает
            while (r < s.length+1 && l >= -1) {
                if (r==19) {
                    let as=21
                }
                if (t_map_copy.has(s[l]) && t_map_copy.get(s[l]) != 0) {
                    start = l;
                    t_map_copy.set(s[l], t_map_copy.get(s[l]) - 1);
                    t_map_count_copy--;


                }
                if (t_map_copy.has(s[r]) && t_map_copy.get(s[r]) != 0) {
                    end = r;
                    t_map_copy.set(s[r], t_map_copy.get(s[r]) - 1);
                    t_map_count_copy--;


                }
                if (t_map_count_copy == 0) {
                    isOneThrow=true
                    // len_i = r - l + 1;

                    let cur = s.slice(start,  end+ 1)
                    if (min.length > cur.length) {
                        min = cur
                    }


                    return;
                }
                l--;
                r++;
            }
        }


        if (!isOneThrow) {
            return ''
        }
        return min
    }
}

s="ab"
t="a"

САММ
// 2й вариант

// 
a = new Solution()
// 

s = "OUZODYXAZV", t = "XYZ"

s="a"
t="a"

s="abc"
t="ac"

s="aaaaaaaaaaaabbbbbcdd"
t="abcdd"

console.log('Задача ответ::: ', a.minWindow(s, t));

