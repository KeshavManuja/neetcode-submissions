class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let q = new Deque();
        let ans = [];
        let start = 0;
        let end = 0;
        while(end < nums.length) {
            while(q.size() && nums[end] > q.back()) q.popBack();
            q.pushBack(nums[end])
            if(end - start + 1 === k) {
                ans.push(q.front());
                if(q.front() === nums[start]) q.popFront();
                start++
            }
            end++
        }
        return ans
    }
}
