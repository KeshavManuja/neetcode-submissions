/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let ans = [];
        let q = [root];
        while(q.length) {
            let size = q.length;
            let arr = [];
            for(let i=0; i<size; i++) {
                let el = q.shift()
                arr.push(el.val);
                if(el.left) q.push(el.left)
                if(el.right) q.push(el.right)
            }
            ans.push(arr)
        }
        return ans
    }
}
