class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let map = {}
        function dfs(index) {
            // we can not choose adjascent means either we can rob and move to index+2, or not rob and move to index+1;
            if(index >= nums.length) return 0;
            if(index in map) return map[index];
            let robbingCurrent = nums[index] + dfs(index+2);
            let notRobbingCurrent = dfs(index+1);
            map[index] = Math.max(robbingCurrent, notRobbingCurrent)
            return map[index]

        }
        return dfs(0)
    }
}
