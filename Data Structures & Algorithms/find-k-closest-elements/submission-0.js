class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
    let index = this.lowerBound(arr, x);
    let res = [];

    let left = index;
    let right = index + 1;

    while (left >= 0 && right < arr.length && res.length < k) {
        if (
            Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)
        ) {
            res.unshift(arr[left]);
            left--;
        } else {
            res.push(arr[right]);
            right++;
        }
    }

    while (res.length < k && left >= 0) {
        res.unshift(arr[left]);
        left--;
    }

    while (res.length < k && right < arr.length) {
        res.push(arr[right]);
        right++;
    }

    return res;
};
lowerBound(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}
}
