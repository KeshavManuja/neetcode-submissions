class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(let i=0; i<operations.length; i++) {
            if(operations[i] === '+') {
                let last = stack[stack.length - 1];
                let secondLast = stack[stack.length - 2];
                stack.push(last + secondLast)
            } else if(operations[i] === 'C') {
                stack.length && stack.pop()
            } else if(operations[i] === 'D') {
                let last = stack[stack.length - 1];
                stack.push(last*2)
            } else {
                stack.push(Number(operations[i]))
            }
        }
        return stack.reduce((ac,cv) => ac+cv,0)
    }
}
