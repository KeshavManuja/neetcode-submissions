class MaxHeap {
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

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max
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
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            const rightIndex = this.getRightChildIndex(index);

            if (rightIndex < length && this.heap[rightIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rightIndex;
            }

            if (this.heap[index] < this.heap[largerChildIndex]) {
                this.swap(index, largerChildIndex);
                index = largerChildIndex;
            } else break;
        }
    }
}
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freqArray = new Array(26).fill(0);

        for(let task of tasks) {
            freqArray[task.charCodeAt(0) - 'A'.charCodeAt(0)]++
        }

        let maxHeap = new MaxHeap;
        for(let i=0; i<26; i++) {
            if(freqArray[i] > 0) maxHeap.push(freqArray[i])
        }

        let q = [];
        let time = 0;
        while(maxHeap.size() || q.length) {
            time++;
            if(maxHeap.size()) {
                let popped = maxHeap.pop() -1;
                if(popped > 0) q.push([popped, time + n])
            }

            if(q.length && time == q[0][1]) {
                maxHeap.push(q.shift()[0])
            }
        }
        return time
    }


}


