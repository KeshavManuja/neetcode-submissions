class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    const lmax = [];
    const rmax = [];
    const n = height.length;
    let trapCount = 0
    lmax[0] = 0
    rmax[ n - 1] = 0;

    for(let i=1; i<n; i++) lmax[i] = Math.max(height[i-1],lmax[i-1])
    
    for(let i=n-2; i>=0; i--) rmax[i] = Math.max(height[i+1], rmax[i+1])
    
    for(let i=0; i<n; i++) {
        let trappedWater = Math.min(rmax[i], lmax[i]) - height[i]
        if(trappedWater > 0) trapCount += trappedWater
    }
    return trapCount
};
}
