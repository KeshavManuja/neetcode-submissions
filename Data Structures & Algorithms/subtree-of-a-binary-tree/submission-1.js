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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let s1 = this.serial(root);
        let s2 = this.serial(subRoot);
        return s1.includes(s2)
    }

    serial(root) {
        if(!root) return '#';
        return `,${root.val},${this.serial(root.left)},${this.serial(root.right)}}`
    }
}
