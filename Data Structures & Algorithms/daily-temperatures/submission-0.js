class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let ans = new Array(temperatures.length).fill(0);
        for(let i = temperatures.length -1; i>=0; i--) {
            while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
                stack.pop()
            }
            if(stack.length) {
                ans[i] = stack[stack.length -1] - i
            }
            stack.push(i)
        }
        return ans
    }
}
