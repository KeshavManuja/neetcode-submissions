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
     * @return {void}
     */
    reorderList(head) {
        let q = [];
        let stack  = [];
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            q.push(slow.val)
            slow = slow.next;
            fast = fast.next.next
        }
        while(slow) {
            stack.push(slow.val)
            slow = slow.next
        }
        console.log(q, stack)
        let dNode = new ListNode(0)
        let dummyNode = dNode;
        while(q.length && stack.length) {
            let node1 = new ListNode(q.shift());
            let node2 = new ListNode(stack.pop());
            dummyNode.next = node1;
            dummyNode.next.next = node2;
            dummyNode = dummyNode.next.next
        }

        while(q.length) {
            dummyNode.next = new ListNode(q.shift())
        }

        while(stack.length) {
            dummyNode.next = new ListNode(stack.pop())
        }
        
        let nextIt = dNode.next;
        let cur = head
        while(nextIt) {
            cur.val = nextIt.val;
            cur = cur.next;
            nextIt = nextIt.next
        }
        return head
    }
}
