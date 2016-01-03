var Trie = {

    /**
     * root node of the trie
     */
    root: {'number': 0},
    /**
     * Add a word to the existing trie.
     * @param {word} word that is added to the trie
     * @type  {void}
     */
    add: function(word) {
        node = this.root;
        // '#' defines the end of a word
        word = word.concat('#');
        for ( var i = 0, l = word.length; i < l; i++ ) {
            Char = word[i]
            if (!( Char in node )) {
                node[Char] =  {};
            }
            node = node[Char]
        }
        this.root.number += 1;
    },
    
    /**
     * Find a word to the existing trie. 
     * @param {word} word to find in the trie
     * @type  {bool}
     */
    find: function(word) {
        node = this.root;
        // '#' defines the end of a word
        word = word.concat('#');
        for ( var i = 0, l = word.length; i < l; i++ ) {
            Char = word[i]
            if (!( Char in node )) {
                return false;
            }
            node = node[Char]
        }
        return true;
    },

     /**
     * Removes a word from the existing trie. 
     * @param {word} word that has to be removed from the trie
     * @type  {bool}
     */
    remove: function(word) {
        // checks if the word exists.
        if (!this.find(word))
        	return false;
        
        if (this.root.number == 1 ) {
        	delete this.root;
        	this.root = {'number': 0};
        }

        // '#' defines the end of a word
        word = word.concat('#');  
        while (word.length > 0) {
        	oldChar = word.charAt(word.length-1);
            node = this.root;
            for ( var i = 0, l = word.length-1; i < l; i++ ) {
                Char = word[i]
                node = node[Char]
            }
            if ( Object.keys(node).length > 1 ) {
               delete node[oldChar]; 
               this.root.number -= 1;
               return true;
            }
            word = word.slice(0,-1); 
        }
    },

    /**
     * Resets the trie
     */
    clean: function() {
        delete this.root;
        this.root = {'number': 0}
    },

    /**
     * Returns the current trie
     * @type  {JSON}
     */
    getTrie: function() {
        return JSON.stringify(this.root);
    },

    visitTrie: function() {

    },
};