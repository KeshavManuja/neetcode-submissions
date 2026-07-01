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
        function dfs(root) {
            if(!root) return 0;
            let leftPartNodes = dfs(root.left);
            let rightPartNodes = dfs(root.right);
            max = Math.max(max, leftPartNodes + rightPartNodes) // Diameter achievable from this node
            return 1 + Math.max(leftPartNodes, rightPartNodes) // returning which part was having max nodes so got with that count
        }
        dfs(root)
        return max
    }

}
