class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if(slow === fast) break
        };
        // We got intersection
        // Now take one more pointer at start and interate slow
        let slow2 = 0;
        while(true) {
            slow = nums[slow]
            slow2 = nums[slow2];
            if(slow == slow2) {
                return slow
            }
        }
    }
}
