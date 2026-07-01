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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true
        let left = this.heightCal(root.left);
        let right = this.heightCal(root.right);
        if(Math.abs(left - right) > 1) return false;
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    };
    heightCal(root) {
        if(!root) return 0;
        return Math.max(this.heightCal(root.left), this.heightCal(root.right)) + 1
    }
}
