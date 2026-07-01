class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MaxHeap();
        let map = new Map()
        for(let i=0; i<points.length; i++) {
            let dist = points[i][0]*points[i][0] + points[i][1]*points[i][1];
            if(map.has(dist)) {
                map.set(dist, [...map.get(dist),  points[i]])
            } else {
                map.set(dist, [points[i]])
                maxHeap.push(dist)
            }
        };


        let toBeRemovedCount = points.length - k;
        while(toBeRemovedCount>0) {
            let top = maxHeap.peek();
            let points = map.get(top);
            if(points.length > toBeRemovedCount) {
                map.set(top, points.slice(toBeRemovedCount));
                break
            } else {
                toBeRemovedCount -= points.length;
                maxHeap.pop();
                map.delete(top)
            }
        }
        
        let ans = [];
        while(maxHeap.size() > 0 && ans.length < k) {
            let top = maxHeap.pop();
            ans.push(...map.get(top))
        }
        return ans
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