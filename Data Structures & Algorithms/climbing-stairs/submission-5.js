class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // bottom down -> start with lowest
    climbStairs(n) {
        if(n<=2) return n
        let dpArray = new Array(n+1).fill(0);

        dpArray[1] = 1
        dpArray[2] = 2
        for(let i=3; i<=n; i++) {
            dpArray[i] = dpArray[i-1] + dpArray[i-2]
        }
        return dpArray[n]
    }
}
