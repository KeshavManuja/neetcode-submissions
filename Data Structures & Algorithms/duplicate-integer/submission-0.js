class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Set();
        for(let el of nums) {
            if(map.has(el)) return true
            map.add(el)
        }
        return false
    }
}
