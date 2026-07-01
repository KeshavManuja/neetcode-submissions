class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a,b) => a-b)
        let ans = []
        for(let i=0; i<nums.length-3; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue
            for(let j=i+1; j<nums.length-2; j++) {
                if(j>i+1 && nums[j] === nums[j-1]) continue
                let k = j+1
                let l = nums.length - 1;
                while( k < l) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];
                    if(sum === target) {
                        ans.push([nums[i],nums[j],nums[k],nums[l]])
                        k++
                        l--
                        while(k < l && nums[k] === nums[k-1]) k++
                        while(k < l && nums[l] === nums[l+1]) l--
                    } else if(sum > target) {
                        l--
                    } else {
                        k++
                    }
                }
            }
        }
        return ans
    }
}
