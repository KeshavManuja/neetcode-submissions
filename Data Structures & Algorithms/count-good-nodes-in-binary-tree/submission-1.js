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
    goodNodes(root) {
        let q = [[root, -Infinity]];
        let count = 0;

        while(q.length) {
            let [node, max] = q.shift();
            if(node.val >= max) count++

            if(node.left) q.push([node.left, Math.max(max, node.val)])
            if(node.right) q.push([node.right, Math.max(max, node.val)])
        }
        return count
    }
}
