class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
    // ✅ This is a **Dynamic Programming** problem because:
    // At each index, the maximum product ending there depends on the results from previous indices.
    // We break the problem into subproblems (max/min product ending at each index), 
    // and build the solution incrementally — classic DP!
    let max = Math.max(...nums); // Initialize max to the largest number in the array in case all values are negative or one single large value is the result

    let currMin = 1; // Tracks the minimum product so far (important because a negative number * negative min could become max)
    let currMax = 1; // Tracks the maximum product so far

    for (let num of nums) {
        // Temporarily store the product of current number and currMax
        // Needed because currMin might change before we calculate both new values
        let temp = num * currMax;

        // Update currMax:
        // Either start new subarray from current number, or extend previous max/min subarrays
        // A negative number can turn a small min into a big max (and vice versa)
        currMax = Math.max(num * currMin, temp, num);

        // Similarly update currMin
        currMin = Math.min(num * currMin, temp, num);

        // Update global max if needed
        max = Math.max(max, currMax);
    }

    return max;
};
}
