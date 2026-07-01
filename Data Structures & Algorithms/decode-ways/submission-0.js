class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = {};
        function dfs(index) {
            if(index === s.length) return 1;
            if(s[index] === '0') return 0; // Bcz 0 is not valid as 1 is for A we can only use it as 2 digit
            if(index in dp) return dp[index];

            let count = dfs(index+1);

            if(index + 1 < s.length) {
                const num = Number(s.slice(index, index+2));
                if(num >= 10 && num <=26) { // It's valid pair
                    count += dfs(index + 2)
                }
            }
            return count
        }
        return dfs(0)
    }
}
