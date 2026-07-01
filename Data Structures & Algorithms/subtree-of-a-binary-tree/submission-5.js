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
    isSubtree(root, subRoot) {
        const s1 = [];
        const s2 = [];
        this.serialize(root, s1);
        this.serialize(subRoot, s2);
        console.log(s1.join(''), s2.join(''))
        return s1.join('').includes(s2.join(''));
    }

    serialize(node, arr) {
        if (!node) {
            arr.push('#');
            return;
        }
        arr.push(',', node.val, ',');
        this.serialize(node.left, arr);
        this.serialize(node.right, arr);
        arr.push('}');
    }
}

