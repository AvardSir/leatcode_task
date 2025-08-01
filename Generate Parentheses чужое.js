class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // let dp=[]
        let dp = Array.from({ length: n + 1 }, x => [])
        dp[0] = ['']
        let curr = ''
        let r = 0, l = 0
        let right = '', left = ''
        for (let i =  1; i <=n; i++) {

            r = i-1
            l = 0
            while (l <= i-1) {
                for (const left of dp[l]) {
                    for (const right of dp[r]) {
                        curr = '(' + left + ')' + right
                        dp[i].push(curr)
                    }
                }


                l++
                r--
            }
            

        }
        return dp[dp.length-1]
    }
}


// оно работате
a = new Solution()
console.log('new Solution::: ');
n = 3

console.log('a.productExceptSelf(tescae1)::: ', a.generateParenthesis(n));

