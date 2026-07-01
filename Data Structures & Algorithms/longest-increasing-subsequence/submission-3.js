class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // Binary Search to find the first index where element >= target
        function upperBound(arr, target) {
            let low = 0, high = arr.length - 1;
            let ans = arr.length; // default to insert at end if all elements are smaller

            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (arr[mid] >= target) {
                    ans = mid;        // potential answer found, look left for better one
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            return ans;
        }

        if (nums.length === 0) return 0;

        const lis = []; // stores the smallest tail of all increasing subsequences

        for (let num of nums) {
            if (lis.length === 0 || num > lis[lis.length - 1]) {
                // Append if num is greater than last element
                lis.push(num);
            } else {
                // 🔁 If current number is smaller than last pushed
                // then it might help to build a longer increasing subsequence in future
                // So, find the upperBound index and replace the old value
                const idx = upperBound(lis, num);
                lis[idx] = num;
            }
        }

        return lis.length;

        /*
        🧾 Summary:
        If we find any element smaller than the last pushed one, 
        it means this new element might help in forming a longer subsequence later.
        So, we replace the element using upperBound — we find the correct position
        where this element can fit (first element >= current), and replace it.
        This keeps the `lis` array with smaller tail values, allowing better flexibility
        for future elements to extend the subsequence.

        📊 Dry Run for Input: [10, 9, 2, 5, 3, 7, 101, 18]

        Step-by-step lis evolution:
        1. num = 10  → lis = [10]               (push 10)
        2. num = 9   → lis = [9]                (replace 10 with 9)
        3. num = 2   → lis = [2]                (replace 9 with 2)
        4. num = 5   → lis = [2, 5]             (push 5)
        5. num = 3   → lis = [2, 3]             (replace 5 with 3)
        6. num = 7   → lis = [2, 3, 7]          (push 7)
        7. num = 101 → lis = [2, 3, 7, 101]     (push 101)
        8. num = 18  → lis = [2, 3, 7, 18]      (replace 101 with 18)

        🎯 Final LIS Length = 4 → [2, 3, 7, 18]
        Note: This is not necessarily the actual LIS sequence, 
        but its length is guaranteed to be correct.
        */
    }
}

