class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        let dp = {};
        function dfs(index) {
            if(index > n || index <=0 ) return 0
            if(index <=2 ) return 1

            if(index in dp) return dp[index]
            dp[index] = dfs(index-1) + dfs(index-2) + dfs(index-3);
            return dp[index] 
        }
        return dfs(n)
    }
}
