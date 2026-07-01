class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Set(nums);
        return map.size < nums.length
        
    }
}
