class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let el of nums) {
            let indx = Math.abs(el) -1;
            if(nums[indx] < 0) {
                return Math.abs(el)
            } 
            nums[indx] *= -1
            
        }
        return -1
    }
}
