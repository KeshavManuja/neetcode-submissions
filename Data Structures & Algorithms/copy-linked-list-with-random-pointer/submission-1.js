// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return head
        // First we need to create a map which will create pointer of old node to new deepyCopy node
        const map = new Map();
        let curr = head;
        while(curr) {
            map.set(curr, new Node(curr.val)) // old node -> new Created node/deepy copy
            curr = curr.next
        }

        // Now need to just do pointers;
        curr = head;
        while(curr) {
            let deepCopyNewNode = map.get(curr); // it's new Node(curr.val) for particular curr
            // Now need to set it's pointers as it;s a new Node
            deepCopyNewNode.next = curr.next ? map.get(curr.next) : null // basically it doing new Clones node 1 to next next clone 2
            // Same with random
            deepCopyNewNode.random = curr.random ? map.get(curr.random) : null
            curr = curr.next
        }
        // Now we having full linkage, head old node having refernce to head of new node stored in map, so we can return map.get(head) which will give new head of new Node
        return map.get(head)
    }
}
