class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];

        let n = nums.length;
        let dp = new Array(n+1).fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for(let i=2; i<n; i++) {
            dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
        }

        return dp[n-1]
    }
}
