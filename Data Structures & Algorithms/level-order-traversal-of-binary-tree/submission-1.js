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
        let res = [];

        function dfs(root,level=0) {
            if(!root) return;

            if(res.length === level) {
                res.push([])
            }

            res[level].push(root.val)
            dfs(root.left, level+1)
            dfs(root.right, level+1)
        }

        dfs(root, 0)
        return res
    }
}
