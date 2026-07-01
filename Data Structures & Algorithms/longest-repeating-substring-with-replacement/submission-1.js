class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let maxLen = 0;
        let freqArray = new Array(26).fill(0);
        while ( right < s.length) {
            freqArray[s.charCodeAt(right) - 'A'.charCodeAt(0)]++
            maxFreq = Math.max(maxFreq, freqArray[s.charCodeAt(right) - 'A'.charCodeAt(0)]);
            let otherOccurences = (right - left + 1) - maxFreq;
            if(otherOccurences <= k) {
                maxLen = Math.max(maxLen, right - left + 1)
            }
            if(otherOccurences > k) {
                freqArray[s.charCodeAt(left) - 'A'.charCodeAt(0)]--
                left++
            }
            right++
        }
        return maxLen
    }
}
