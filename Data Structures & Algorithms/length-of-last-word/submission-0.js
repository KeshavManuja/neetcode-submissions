class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1;
        let count = 0;

        // skip trailing spaces
        while (i >= 0 && s[i] === " ") i--;

        // count last word
        while (i >= 0 && s[i] !== " ") {
            count++;
            i--;
        }

        return count;
    }
}
