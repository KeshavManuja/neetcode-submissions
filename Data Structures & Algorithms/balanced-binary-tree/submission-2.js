class Solution {
    isBalanced(root) {
        function recur(node) {
            if (!node) return 0;
            let left = recur(node.left);
            if (left === -1) return -1; // unbalanced left
            
            let right = recur(node.right);
            if (right === -1) return -1; // unbalanced right
            
            if (Math.abs(left - right) > 1) return -1; // current not balanced
            
            return 1 + Math.max(left, right); // return height
        }
        
        return recur(root) !== -1;
    }
}
