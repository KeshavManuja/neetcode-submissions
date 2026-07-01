class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        const ans = [];
        for(let i=0; i<n; i++) {
            ans[(i+k)%n] = nums[i]
        }
        for(let i=0; i<n; i++) {
            nums[i] = ans[i]
        }
    }
}
