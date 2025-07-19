class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     static isAnagram(s, t) {
        if (s.length != t.length) {
            return false

        }

        // из s словарь
        const s_map = new Map()
        for (const i of s) {
            if (!s_map.has(i)) {
                s_map.set(i,1)
                
                
            }
            else {
                s_map.set(i,s_map.get(i)+1)
                
            }
        }
        // из t словарь
        
        for (const i of t) {
            
            if (!s_map.has(i)) {
                console.log('s_map::: ', s_map);
                
                return false
            }
            else if(s_map.get(i)==0){
                return false
            }
            else{
                s_map.set(i,s_map.get(i)-1)
                // t_map[i]-=1
            }
        }
        return true

    }
}

// РАБОТАЕТ сам сделал

s = "racecar"
t = "carrace"

s="bbcc"
t="ccbc"

// isAnagram(s, t)
console.log('isAnagram(s, t)::: ', Solution.isAnagram(s, t));


