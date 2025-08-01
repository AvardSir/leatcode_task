class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */

    push(val) {
        this.min = this.min > val ? val : this.min
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.min == this.stack[this.stack.length - 1]) {
            this.min = Infinity
            this.stack.pop()
            for (const i of this.stack) {
                this.min = this.min > i ? i : this.min
            }
        }
        else {
            this.stack.pop()
        }

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}




// a = new Solution()
// s = "[]"
// // s = "([{}])"
// console.log('a.productExceptSelf(tescae1)::: ', a.isValid(s));

