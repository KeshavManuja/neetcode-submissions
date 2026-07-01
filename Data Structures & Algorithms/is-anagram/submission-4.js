class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj1 = {};
        let obj2 = {};
        if(s.length !== t.length) return false
        for(let i=0; i<s.length; i++) obj1[s[i]] = (obj1[s[i]] || 0) + 1

        for(let i=0; i<t.length; i++) obj2[t[i]] = (obj2[t[i]] || 0) + 1

        for(let keys in obj1) {
            if(obj1[keys] !== obj2[keys]) return false
        }

        return true
    }
}
