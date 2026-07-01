/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // Stack way;
        let curr = head;
        let stack = []
        while(curr) {
            stack.push(curr.val);
            curr = curr.next
        }

        let dummyLL = new ListNode(0);
        let dummyHead = dummyLL
        while(stack.length) {
            let newCurrEl = new ListNode(stack.pop());
            dummyHead.next = newCurrEl
            dummyHead = dummyHead.next
        }
        return dummyLL.next
    }
}
