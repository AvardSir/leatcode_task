class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (const i of tokens) {
            if (!isNaN(i)) {
                stack.push(parseInt(i))
            }
            else {
                // тоест это не чилос + - *
                let prev = stack.pop()
                let prev_prev = stack.pop()

                let total = 0
                if (i == '+') {
                    total = prev + prev_prev

                }
                if (i == '-') {
                    total = prev_prev - prev

                }
                if (i == '*') {
                    total = prev * prev_prev

                }
                if (i == '/') {
                    total = Math.trunc(prev_prev / prev)


                }
                stack.push(total)
            }
        }

        return stack[0]
    }
}

a = new Solution()
tokens = ["1", "2", "+", "3", "*", "4", "-"]
tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5

console.log('a.productExceptSelf(tescae1)::: ', a.evalRPN(tokens));

