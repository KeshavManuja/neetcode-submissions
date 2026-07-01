class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, map={}) {
        if(n <0) return 0
        if(n == 0) return 1
        if(map[n]) return map[n]
        map[n] = this.climbStairs(n-1) + this.climbStairs(n-2)
        return map[n]
    }
}
