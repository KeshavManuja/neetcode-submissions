class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let obj = new Set();
        for(let el of nums) {
            if(obj.has(el)) return el
            obj.add(el)
        }
        return -1
    }
}
