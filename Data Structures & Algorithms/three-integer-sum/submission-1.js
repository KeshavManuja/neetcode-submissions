class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b) //Nlogn
        let ans = new Set()
        for(let i=0; i<nums.length-2; i++) {
            let j = i+1
            let k = nums.length - 1;
            while ( j < k) {
                let sum = nums[i] + nums[j] + nums[k]
                if( sum === 0) {
                    ans.add(JSON.stringify([nums[i],nums[j],nums[k]]))
                    j++
                    k--
                } else if(sum < 0) {
                    j++
                } else {
                    k--
                }
            }
        }
        return Array.from(ans).map((el) => JSON.parse(el))
    }
}
