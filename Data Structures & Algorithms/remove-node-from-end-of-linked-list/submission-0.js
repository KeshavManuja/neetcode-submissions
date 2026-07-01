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
        // find lenght then do len-n+1, then remove element from start
        // Step1-> Finding el
        let len = 0;
        let curr = head;
        while(curr) {
            len++
            curr = curr.next
        }

        // Step - 2 -> Lenght from start : 1 based indexing
        let startLen = len - n + 1;

        // Step-3 -> Removing that element
        if(startLen === 1) return head.next
        let deleteIterator = head
        while(startLen > 2) {
            deleteIterator = deleteIterator.next;
            startLen--
        }
        if(deleteIterator && deleteIterator.next) {
            deleteIterator.data = deleteIterator.next.data;
            deleteIterator.next = deleteIterator.next.next
        }
        return head
    }
}
