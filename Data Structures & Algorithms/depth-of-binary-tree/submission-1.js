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
     * @return {number}
     */
    maxDepth(root) {
        function maxDepth(root) {
            if(!root) return 0;
            return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
        }
        return maxDepth(root)
    }
}
