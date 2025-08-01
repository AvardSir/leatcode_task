class MinStack {
    constructor() {
        this.stack = []
        this.min = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length == 0) {
            this.stack.push(0)
            this.min = val
        }
        else {

            let now = val - this.min

            this.stack.push(now)
            if (now < 0) {
                this.min = val

            }
            // this.stack.push(now)

        }

    }

    /**
     * @return {void}
     */
    pop() {


        let pop_ = this.stack.pop()
        if (pop_ < 0) {
            this.min = this.min - pop_
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack[this.stack.length - 1] < 0) {
            return this.min
        }
        return this.stack[this.stack.length - 1] + this.min

    }

    /**
     * @return {number}
     */
    getMin() { return this.min }
}
