class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let prefix = 0; // Product from left
        let suffix = 0; // Product from right
        let res = nums[0]; // Result holds the max product found

        for (let i = 0; i < nums.length; i++) {
            // If prefix becomes 0, reset it to 1 (we treat 0 as boundary)
            prefix = (prefix === 0 ? 1 : prefix) * nums[i];

            // Similarly, calculate product from right
            suffix = (suffix === 0 ? 1 : suffix) * nums[nums.length - 1 - i];

            // At each step, take the max of current result and both prefix & suffix
            res = Math.max(res, prefix, suffix);
        }

        return res == -0 ? 0 : res;
    }
}
