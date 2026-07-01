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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Making n differnce from start;
        let nstepahead = head;
        let curr = head;
        let steps = n;
        while(steps > 0) {
            nstepahead  = nstepahead.next;
            steps--
        }
        if(nstepahead === null) return head.next
        // Now traversing nstepahead until last
        while(nstepahead.next) {
            nstepahead = nstepahead.next;
            curr = curr.next
        }

        // now curr is having that element on it'sm place, that to be removed, it's like contant window
        curr.next = curr.next.next
        return head
    }
}
