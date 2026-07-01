class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let newSet = new Map()
        for(let i=0; i<nums.length; i++) {
            let diff = target - nums[i]
            if(newSet.has(diff)) return [newSet.get(diff),i];
            else newSet.set(nums[i],i)
        }
    }
}
