class MinStack {
    constructor() {
        this.arr = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]);
        this.minStack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
