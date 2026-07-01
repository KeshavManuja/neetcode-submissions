class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLen = 0;
        let maxPal = '';

        for(let i=0; i<s.length; i++) {

            // Odd palindrome
            let l=i;
            let r = i;
            while(l >=0 && r <= s.length && s[l] == s[r]) {
                if(r - l + 1 > maxLen) {
                    maxLen = r - l + 1;
                    maxPal = s.slice(l, r+1)
                }
                l--
                r++
            }

            //Even palindrome
            l = i;
            r = i+1;
            while(l >=0 && r <= s.length && s[l] == s[r]) {
                if(r - l + 1 > maxLen) {
                    maxLen = r - l + 1;
                    maxPal = s.slice(l, r+1)
                }
                l--
                r++
            }
        }
        return maxPal

    }
}
