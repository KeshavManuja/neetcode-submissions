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
     * @return {number[]}
     */
    rightSideView(root,level=0, ans = []) {
        // your code here
        if(!root) return ans
        if(ans.length=== level) {
            ans.push(root.val)
        }
        
        this.rightSideView(root.right, level+1, ans)
        this.rightSideView(root.left, level+1, ans)
        return ans
    }
}
