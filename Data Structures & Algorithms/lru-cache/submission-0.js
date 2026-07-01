class ListNode {
    constructor(key, value, prev = null, next = null) {
        this.key = key;
        this.val = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        this.left = new ListNode(0, 0);
        this.right = new ListNode(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
            this.cache.delete(key);
        }

        if (this.cache.size === this.capacity) {
            const lruNode = this.left.next;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }

        const newNode = new ListNode(key, value);
        this.insert(newNode);
        this.cache.set(key, newNode);
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }
}
