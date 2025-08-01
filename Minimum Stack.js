class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length%2!=0) {
            return false
        }
        let left = `{ ( [`.split(' ')
        let right = `} ) ]`.split(' ')
        let map_left_to_rught = new Map()
        for (let i = 0; i < left.length; i++) {
            map_left_to_rught.set(left[i], right[i])
        }
        for (const i of left) {

        }
        let stack = []
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            // console.log('left::: ', left);
            // console.log('s[i]::: ', s[i]);

            if (left.includes(s[i])) {

                stack.push(s[i])

            }
            else {
                if (s[i]!= map_left_to_rught.get(stack.pop() )) {
                    return false
                }
            }
        }
        if (stack.length!=0) {
            return false
        }
        return true
    }
}



a = new Solution()
s = "[]"
// s = "([{}])"
console.log('a.productExceptSelf(tescae1)::: ', a.isValid(s));

