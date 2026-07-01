/*Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}
*/
// break this into 3 parts
// 1) create new node and insert it between curr and curr.next node
// 2) update the random pointer by going to curr.random.next as we added new nodes after current node;
// 3) create a dummyNode and remove linking of newNodes with old and return newList
class Solution {
    copyRandomList(head) {
        if(!head) return head;
        this.insertNewNodeBetween(head)
        this.updateRandomPointers(head)
        return this.createDummyNodeAndRemoveLinking(head)
    }
    insertNewNodeBetween(head) {
        let curr = head;
        while(curr) {
            let newNode = new Node(curr.val); // orignal 1->2
            newNode.next = curr.next // new createed 1 -> 2
            curr.next = newNode // 1 -> 1->2
            curr = curr.next.next // curr goes to 2 now
        }
    }
    updateRandomPointers(head) {
        let curr = head;
        while(curr) {
            let copyNode = curr.next;
            copyNode.random = curr.random ? curr.random.next : null
            curr = curr.next.next
        }
    }
    createDummyNodeAndRemoveLinking(head) {
        let newList = new Node(0);
        let res = newList
        let curr = head;
        while(curr) {
            /*Creating a new List by 
            pointing to copied nodes*/
            res.next = curr.next
            res = res.next

            /*Disconnect and revert back 
            to the initial state of the 
            original linked list*/
            curr.next = curr.next.next
            curr = curr.next
        }
        return newList.next
    }
}