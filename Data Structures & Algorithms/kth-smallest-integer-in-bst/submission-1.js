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
     * @param {number} k
     * @return {number}
     */
    // Early exit from inorder
    kthSmallest(root, k)  {
        let count = 0;
        let ans = null;
        function recur(root) {
            if(!root || ans !== null) return
            recur(root.left)
            count++
            if(count === k) {
                ans = root.val
                return
            }
            recur(root.right)
        }
        recur(root)
        return ans
    };
}
