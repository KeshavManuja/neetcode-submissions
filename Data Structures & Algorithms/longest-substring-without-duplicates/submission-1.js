class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLen = 0;
        let map = new Set()
        while(right < s.length) {
            while(map.has(s[right])) {
                map.delete(s[left])
                left++
            }
            map.add(s[right])
            maxLen = Math.max(maxLen, right - left + 1);
            right++
        }
        return maxLen
    }
}
