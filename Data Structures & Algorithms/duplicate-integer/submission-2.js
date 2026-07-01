class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for (let i in nums) {
            map[nums[i]] ? map[nums[i]]++ : map[nums[i]]=1
        }

        for(let keys in map){
            if(map[keys] > 1) return true
        }

        return false
    }
}
