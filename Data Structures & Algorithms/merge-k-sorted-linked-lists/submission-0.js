/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
 class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0] ?? null;
    }
    top() {
        return this.heap[this.heap.length -1]
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index].val < this.heap[parentIndex].val) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightIndex = this.getRightChildIndex(index);

            if (rightIndex < length && this.heap[rightIndex].val < this.heap[smallerChildIndex].val) {
                smallerChildIndex = rightIndex;
            }

            if (this.heap[index].val > this.heap[smallerChildIndex].val) {
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            } else break;
        }
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let minHeap = new MinHeap();

        let head = new ListNode(0);
        let curr = head;

        for(let i=0; i<lists.length; i++) { //Pushed all small elements to the minHeap and made the list
            lists[i] && minHeap.push(lists[i])
        }

        while(minHeap.size()) {
            let front = minHeap.pop();
            if(front.next) minHeap.push(front.next);
            curr.next = front
            curr = curr.next
        }
        return head.next;
    };
}
