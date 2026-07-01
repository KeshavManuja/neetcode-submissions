class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        if(this.palindDromeCheck(s)) return true
        while(left < right) {
            if(s[left] !== s[right]) {
                //Check is it's palindrome if we remove left or right
                // Remove left
                return this.palindDromeCheck(s.slice(left + 1, right + 1)) ||
                       this.palindDromeCheck(s.slice(left, right));
            }
            left++
            right--
        }
        return false
    }
    palindDromeCheck(s) {
        let left = 0;
        let right = s.length - 1;
        while(left < right) {
            if(s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }
}
