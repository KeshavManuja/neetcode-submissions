class Solution {
    reverseBetween(head, left, right) {
        if (!head || left === right) return head;
        
        const dummy = new ListNode(0);
        dummy.next = head;
        
        // Step 1: Traverse to the node before 'left'
        let prevLeftPart = dummy;
        let curr = head;
        let index = 1;
        
        while (index < left) {
            prevLeftPart = curr;
            curr = curr.next;
            index++;
        }
        
        let tailOfReversed = curr;
        let prev = null;
        let next = null;
        
        // Step 2: Reverse the sublist from left to right
        while (index <= right && curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            index++;
        }
        
        // Step 3: Reconnect the reversed sublist
        prevLeftPart.next = prev;
        tailOfReversed.next = curr;
        
        return dummy.next;
    }
}
