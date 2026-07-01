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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newR = new ListNode(0);
        let newList = newR
        let curr1 = list1;
        let curr2 = list2;
        while(curr1 && curr2) {
            if(curr1.val < curr2.val) {
                let newNode = new ListNode(curr1.val);
                newList.next = newNode
                newList = newList.next
                curr1 = curr1.next
            } else {
                let newNode = new ListNode(curr2.val);
                newList.next = newNode
                newList = newList.next
                curr2 = curr2.next
            }
        }
        while(curr1) {
            let newNode = new ListNode(curr1.val);
            newList.next = newNode
            newList = newList.next
            curr1 = curr1.next
        }

        while(curr2) {
            let newNode = new ListNode(curr2.val);
            newList.next = newNode
            newList = newList.next
            curr2 = curr2.next
        }
        return newR.next
    }
}
