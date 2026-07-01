class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans = '';
        let l = 0;
        const minLength = Math.min(...strs.map(word => word.length));
        while(l < minLength) {
            let ch = strs[0][l]
            for(let i=1; i<strs.length; i++) {
                if(strs[i][l] !== ch) {
                    return ans
                }
            }
            ans += ch
            l++
        }
        return ans
    }
}
