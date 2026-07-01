class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.eow = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(let i=0; i<word.length; i++) {
            let indx = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(!curr.children[indx]) curr.children[indx] = new TrieNode()

            curr = curr.children[indx]
        }
        curr.eow = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root
        return this.dfs(word, 0, curr)
    }

    dfs(word, index, root) {
        let curr = root;
        if(!curr) return false;
        if(index === word.length) return root.eow;

        for(let i=index; i<word.length; i++) {
            if(word[i] === '.') {
                for(let child of curr.children) {
                    if(child && this.dfs(word, i+1, child)) return true
                }
                return false
            } else {
                let indx = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
                if(!curr.children[indx]) return false;
                curr = curr.children[indx]
            }
        }

        return curr.eow
    }
}
