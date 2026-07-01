class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if(cost.length === 0) return 0
        if(cost.length === 1) return cost[0];
        if(cost.length === 2) return Math.max(cost[0], cost[1]);

        return Math.min(this.minCost(cost), this.minCost(cost.slice(1)))
    }

    minCost(nums) {
        let dp = {}
        function dfs(index) {
            if(index >= nums.length) return 0;
            if(dp[index]) return dp[index]
            let takingFirstStep = nums[index] + dfs(index+1);
            let takingSecondStep = nums[index] + dfs(index+2);
            dp[index] = Math.min(takingFirstStep, takingSecondStep)
            return dp[index]

        }
        return dfs(0)
    }
}
