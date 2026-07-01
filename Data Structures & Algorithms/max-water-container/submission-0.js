class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1; 
        let max = 0
        while (left < right) {
            let minHeight = Math.min(heights[left], heights[right]);
            max = Math.max(max, (right - left)*minHeight);
            if(minHeight === heights[left]) left++
            else right--
        }
        return max
    }
}
