class MinStack {
    constructor() {
        this.arr = [];
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.arr.length == 0) {
            this.min = val
            this.arr.push(0)
        } else {
            this.arr.push(val - this.min);
            if(val < this.min) this.min = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.arr.length === 0) return;
        const pop = this.arr.pop();
        if(pop < 0) this.min -= pop;
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.arr[this.arr.length - 1];
        return top > 0 ? top + this.min : this.min
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
