class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans = []
        let stack_left = []
        for (let i = 0; i < n; i++) {
            stack_left.push('(')

        }
        let stack_right = []
        let str = ''
        function dfs(str, stack_left, stack_right) {

            if (stack_left.length == 0 && stack_right.length == 0) {
                ans.push(str)
                return
            }

            if (stack_left.length != 0) {

                // str += stack_left.pop()
                // stack_right.push(')')
                let pop_l = stack_left.slice(0, stack_left.length - 1)
                // let push_r=
                // dfs(str, [...stack_left], [...stack_right])
                dfs(str + stack_left[stack_left.length - 1], [...pop_l], [...stack_right,')'])


            }
            if (stack_right.length != 0) {

                // str += stack_right.pop()
                let pop_r = stack_right.slice(0, stack_right.length - 1)
                dfs(str + stack_right[stack_right.length - 1], [...stack_left], [...pop_r])
            }

        }
        dfs(str, stack_left, stack_right)
        return ans
    }
}

// оно работате
a = new Solution()
n = 1

console.log('a.productExceptSelf(tescae1)::: ', a.generateParenthesis(n));

