class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = [];
    for(let i=0; i<tokens.length; i++) {
        if(isNaN(tokens[i])) {
            let el1 = Number(stack.pop())
            let el2 = Number(stack.pop())
            if(tokens[i] === '+') stack.push(el1 + el2)
            else if(tokens[i] === '-') stack.push(el2 - el1)
            else if (tokens[i] === '/') stack.push(Math.trunc(el2 / el1));
            else stack.push(el1*el2)
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};
}
