class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        
        let dp = {}
        function dfs(i,j) {
            if(i === nums.length) return 0 // Base case
            let key = `${i}-${j}`
            if(key in dp) return dp[key]
            let skip = dfs(i+1,j)
            let take = 0
            if(j === -1 || nums[j] < nums[i]) {  // J== -1 for starting element as we at start we don't have anything. nums[j] < nums[i] to increase span for current window
                take = 1 + dfs(i+1, i)
            }
            dp[key] = Math.max(skip, take)
            return dp[key]
        }

        return dfs(0,-1)
    }
}
