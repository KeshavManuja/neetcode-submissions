class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.eow = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }
    
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(let i=0; i<word.length; i++) {
            let indx = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(!curr.children[indx]) {
                curr.children[indx] = new TrieNode()
            }
            if(i === word.length - 1) {
                curr.children[indx].eow = true
            }
            curr = curr.children[indx]
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for(let i=0; i<word.length; i++) {
             let indx = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
             if(!curr.children[indx]) return false
             curr = curr.children[indx]
        }
        return curr.eow
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(let i=0; i<prefix.length; i++) {
             let indx = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
             if(!curr.children[indx]) return false
             curr = curr.children[indx]
        }
        return true
    }
}
