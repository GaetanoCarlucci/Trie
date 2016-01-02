var Trie = {

    /**
     * root node of the trie
     */
    root: {},
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
        // '#' defines the end of a word
        word = word.concat('#');  
        while (word.length > 0)
        {
            node = this.root;
            for ( var i = 0, l = word.length-1; i < l; i++ ) {
                Char = word[i]
                if (!( Char in node )) {
                    return false;
                }
                node = node[Char]
            }
        if ( Object.keys(node).length > 1 )
        {
        	console.log(JSON.stringify(node));
        	console.log(Object.keys(node).length);
            console.log(Char);
            console.log(Object.keys(node));
            delete node[Char]; 
        }
        word = word.slice(0,-1); 
    }
    return true;
    },

    /**
     * Returns the current trie
     * @type  {JSON}
     */
    getTrie: function() {
        return JSON.stringify(this.root);
    },
};