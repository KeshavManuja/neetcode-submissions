class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MaxHeap();

        for (let i = 0; i < points.length; i++) {
            let [x, y] = points[i];
            let dist = x * x + y * y;
            maxHeap.push({ dist, point: points[i] });

            if (maxHeap.size() > k) {
                maxHeap.pop(); // remove the farthest
            }
        }

        let res = [];
        while (maxHeap.size() > 0) {
            res.push(maxHeap.pop().point);
        }

        return res;
    }
}

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
        return max;
    }

    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = this.getParentIndex(index);
            if (this.heap[index].dist > this.heap[parent].dist) {
                this.swap(index, parent);
                index = parent;
            } else break;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let largest = this.getLeftChildIndex(index);
            const right = this.getRightChildIndex(index);

            if (
                right < length &&
                this.heap[right].dist > this.heap[largest].dist
            ) {
                largest = right;
            }

            if (this.heap[index].dist < this.heap[largest].dist) {
                this.swap(index, largest);
                index = largest;
            } else break;
        }
    }
}

