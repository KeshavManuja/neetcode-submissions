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
    diameterOfBinaryTree(root) {
        let max = 0;
        function recur(root) {
            if(!root) return 0
            let leftPart = recur(root.left)
            let rightPart = recur(root.right);
            max = Math.max(max, leftPart + rightPart)
            return 1 + Math.max(leftPart, rightPart)
        }
        recur(root)
        return max
    }
}
