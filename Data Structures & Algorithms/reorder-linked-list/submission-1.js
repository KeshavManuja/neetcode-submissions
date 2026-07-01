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
        // Finding middle element;
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next
        }

        // Now reversing from slow
        let reverseMid  = this.reverse(slow.next);
        slow.next = null
        
        let curr = head;
        let rCurr = reverseMid
        while(rCurr) {
            let currNext = curr.next;
            let rCurrNext = rCurr.next

            curr.next = rCurr;
            rCurr.next = currNext
            
            rCurr = rCurrNext
            curr = currNext
        }
        return head
    }

    reverse(head) {
        let curr = head;
        let prev = null;
        let next = null;
        while(curr)  {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        };
        return prev
    }
}
