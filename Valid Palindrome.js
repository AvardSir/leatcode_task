class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()

        let chars = ` '"+-?/.,:`.split('')
        s=s.split('')
        s = s.filter(x => !chars.includes(x))

        
        let left = 0
        let right = s.length - 1
        while (left < right) {
            if (s[left] != s[right]) {
                console.log('s[right]::: ', s[right]);
                console.log('s[left]::: ', s[left]);
                return false
            }
            left++
            

            right--
            

        }
        return true
    }
}






// 
a = new Solution()
// 

s = "Was it a car or a cat I saw?"
s="Madam, in Eden, I'm Adam"
console.log('Задача ответ::: ', a.isPalindrome(s));

