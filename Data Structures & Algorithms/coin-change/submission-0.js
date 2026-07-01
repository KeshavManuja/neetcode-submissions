class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(arr, target) {
        // index to MinStep map
        let dp = {}
        function stepCounter(target) {
            if(target < 0) return Infinity
            if(target == 0) return 0
            
            if(target in dp) return dp[target]
            let minStep = Infinity;
            for(let i=0; i< arr.length; i++) {
                let curr = stepCounter(target - arr[i]);
                if(curr !== Infinity) {
                    minStep = Math.min(minStep, curr+1)
                }
            }
            
            return dp[target] = minStep
        }
        let ans = stepCounter(target);
        return ans === Infinity ? -1 : ans
    }
}
