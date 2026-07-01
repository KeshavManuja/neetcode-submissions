class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        if(s.length < 2) return false
        for(let i=0; i<s.length; i++) {
            let char = s[i];
            if(char === '(' || char === '{' || char === '[') stack.push(char)
            else {
                if(!stack.length) return false
                if(char === ')') {
                    if(stack.pop() !== '(') return false
                } else if(char === '}') {
                    if(stack.pop() !== '{') return false
                } else if(char === ']') {
                    if(stack.pop() !== '[') return false
                }
            }
        }
        return stack.length === 0
    }
}
