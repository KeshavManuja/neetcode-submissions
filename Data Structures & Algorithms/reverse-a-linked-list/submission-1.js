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
        // I just need to change the poiunters 1->2 I need to do 1<- 2, so next and prev one is getitng mpacted,
        // Thus I need 3 iteratorts, next, curr, prev;
        let prev = null;
        let next = null;
        let curr = head;
        while(curr) {
            next = curr.next; // storing next elements refernce before changeing the next
            curr.next = prev // reversing the popinter;
            prev = curr // now move prev to current as 1->2 is converted to 1 <- 2 now we need to go to 1 <- 2 -> 3, so prev go to 2 and curr go to 3
            curr = next
        }

        // now, prev contains reverse LL
        return prev
    }
}
