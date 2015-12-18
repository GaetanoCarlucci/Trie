var Trie = {

    /**
     * root node of the trie
     */
    root: {},
    /**
     * Add a word to the existing trie.
     * @param {word} word that is added to the root trie
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
     * Find a word to the existing dictionary. 
     * @param {word} word that is added to the root trie
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
     * Returns the current trie
     * @type  {JSON}
     */
    getTrie: function() {
        return JSON.stringify(this.root);
    },
};