class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newS= s.split('').sort()
        let newT= t.split('').sort()
        // console.log(newS,newT)
        return newS.join('') === newT.join('')
    }
}
