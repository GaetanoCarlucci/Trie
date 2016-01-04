var Trie = {

    /**
     * root node of the trie
     */
    root: {'number': 0},

    /**
     * alphabet letters in lower case
     */
    alphabet: 'abcdefghijklmnopqrstuvwxyz#',
    
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
     * Returns the effective contents of the trie
     * @type  {JSON}
     */
    getTrie: function() {
        return JSON.stringify(this.root);
    },

    /**
     * Returns human readable contents of the trie
     * @type  {String}
     */
    getContent: function() {
    	list = [];
    	this.visitTrie(this.root, '', list);
    	return String(list).split(",").join("<br />");
    },

    /**
     * Recursively visits the trie in alphabetic order and returns an array of strings
     * @type  {array}
     */
    visitTrie: function(node, word, list) {

    	if (Object.keys(node).length == 1) {
    		if (Object.keys(node) == '#') {
    			list.push(word)
    			return;
    		}
    	}

    	for ( var i = 0, l = this.alphabet.length; i < l; i++ ) {
    		Char = this.alphabet[i];
    		if ( Char in node ) {
    			this.visitTrie(node[Char], word + Char, list);
    		}
    	}
    },
};