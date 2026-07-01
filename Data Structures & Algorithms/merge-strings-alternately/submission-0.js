class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let left = 0;
        let right = 0;
        let ans = '';
        while(left < word1.length && right < word2.length) {
            ans= ans + word1[left++] + word2[right++];
        }
        while(left < word1.length) ans += word1[left++]
        while(right < word2.length) ans += word2[right++]
        return ans
    }
}
