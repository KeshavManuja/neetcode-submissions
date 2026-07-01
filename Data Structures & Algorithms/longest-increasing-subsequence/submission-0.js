class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // Recursion - we can either consider the element in max Increasing or we can ignore, we taking 2 pointers i, j
        // i will be starting point and j is the span or last point until which we can expand

        function dfs(i,j) {
            if(i === nums.length) return 0 // Base case

            let LIS = dfs(i+1,j); // not include current

            if(j === -1 || nums[j] < nums[i]) {  // J== -1 for starting element as we at start we don't have anything. nums[j] < nums[i] to increase span for current window
                LIS = Math.max(LIS, 1 + dfs(i+1, i))
            }
            return LIS
        }

        return dfs(0,-1)
    }
}
