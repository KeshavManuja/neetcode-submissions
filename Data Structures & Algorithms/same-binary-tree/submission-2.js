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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // BFS
        const q1 = [p];
        const q2 = [q];
        while(q1.length && q2.length) {
                let nodeP = q1.shift();
                let nodeQ = q2.shift();
                if(!nodeP && !nodeQ) continue;
                if(!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false
                q1.push(nodeP.left)
                q1.push(nodeP.right)
                q2.push(nodeQ.left)
                q2.push(nodeQ.right)
        }
        return true
    }
}
