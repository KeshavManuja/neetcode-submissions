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
    kthSmallest(root, k) {
        return this.inOrder(root)[k-1]
    }

    inOrder(root,ans=[]) {
        if(!root) return
        this.inOrder(root.left, ans)
        ans.push(root.val)
        this.inOrder(root.right, ans)
        return ans
    }
}
