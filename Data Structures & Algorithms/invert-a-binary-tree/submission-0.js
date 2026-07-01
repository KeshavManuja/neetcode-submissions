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
     * @return {TreeNode}
     */
    invertTree(root) {
        function recur(root) {
            if(!root) return
            let left = root.left;
            let right = root.right;
            root.left = right;
            root.right = left;
            recur(root.left)
            recur(root.right)
        }
        let curr = root
        recur(curr)
        return root
    }
}
