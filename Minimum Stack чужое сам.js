class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */

    push(val) {
        this.stack.push(val)
        if (this.stack.length == 0) {

            this.minStack.push(val)
        }
        else {
            if (this.minStack[this.minStack.length - 1] > val) {
                this.minStack.push(val)
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const pop_ = this.stack.pop()
        if (pop_ == this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() { return this.stack[this.stack.length - 1] }

    /**
     * @return {number}
     */
    getMin() { return this.minStack[this.minStack.length - 1] }
}
