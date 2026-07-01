class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //your code goes here
        let r = 0;
        let l = 0;
        let maxLen = 0;
        let map = new Array(26).fill(0);
        let maxFreq = 0
        while(r < s.length) {
            map[s.charCodeAt(r) - 'A'.charCodeAt(0)]++
            maxFreq = Math.max(maxFreq, map[s.charCodeAt(r) - 'A'.charCodeAt(0)]);
            let changes = (r - l + 1) - maxFreq;
            if(changes <= k) {
                maxLen = Math.max(maxLen, r-l+1)
            }
            if(changes > k) {
                map[s.charCodeAt(l) - 'A'.charCodeAt(0)]--
                l++
            }
            r++
        }
        return maxLen
    }
}

