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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) return root
        if(root.val > key) root.left = this.deleteNode(root.left, key);
        else if(root.val < key) root.right =  this.deleteNode(root.right, key);
        else {
            // Case 1-> no child
            if(!root.left && !root.right) return null;

            // Case -2 -> 1 child
            if(!root.left) return root.right;
            if(!root.right) return root.left;

            // Case -3, 2 childs -> find next inOrder element or left most element in right subtree of root as current el
            let leftMostInRightSubTree = this.leftMostinRight(root.right);
            root.val = leftMostInRightSubTree.val;
            root.right = this.deleteNode(root.right, leftMostInRightSubTree.val)
        }
        return root
    }

    leftMostinRight(root) {
        let curr = root;
        while(curr.left) {
            curr = curr.left
        }
        return curr
    }
}
