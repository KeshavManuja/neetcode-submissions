class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {};
        nums.forEach((el) => obj[el] = (obj[el] || 0) + 1);
        for(let keys in obj) {
            if(obj[keys] > Math.floor(nums.length/2)) return keys
        }
    }
}
