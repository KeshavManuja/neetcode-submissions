class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let c = 0;
        let char = 0;
        for(let i=0; i<nums.length; i++) {
            if(c === 0) char = nums[i]
            if(nums[i] === char) c++
            else c--
        }
        return char

    }
}
