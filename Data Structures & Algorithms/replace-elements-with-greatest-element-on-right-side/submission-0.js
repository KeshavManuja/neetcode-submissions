class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length;
        let ans = Array(n).fill(-1);
        let maxRight = arr[n-1];
        for(let i=n-2; i>=0; i--) {
            ans[i] = maxRight
            maxRight = Math.max(maxRight, arr[i])
        }
        return ans
    }
}
