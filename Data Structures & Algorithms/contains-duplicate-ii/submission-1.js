class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let right = 0;
        let ind = new Map();
        while ( right < nums.length) {
            if(ind.has(nums[right])) {
                if((right - ind.get(nums[right])) <= k) return true
            } 
            ind.set(nums[right], right)
            right++
        }
        return false
    }
}
