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
        // for optimisatoin we can do both work togehter to cal height and then check if it's balanced or not;
        // using post order as we need to start from end and come to top
        let isBalanced = true;

        function recur(root) {
            if(!root) return 0;
            let leftPart = recur(root.left);
            let rightPart = recur(root.right);
            if(Math.abs(leftPart - rightPart) > 1) {
                isBalanced = false
                return 0
            }
            return 1 + Math.max(leftPart, rightPart)
        }

        recur(root)
        return isBalanced
    }
}
