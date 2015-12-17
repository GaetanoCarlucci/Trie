var Trie = {

    root: {},
    /**
     * Add a word to the existing dictionary. If a trie node doesn't exist
     * yet, it is created with that character as its stem.
     * Since an add is already an expensive action, compared to adding nodes to
     * native Javascript containers like Array or Object, inserting a trie
     * node in lexical order is relatively cheap.
     * Please refer to the test suite to compare performance in your browser(s).
     *
     * @param {word} word Remainder of the word that is added to the root trie
     * @type  {void}
     */
    add: function(word) {
        node = this.root;
        word = word.concat('#');
        for ( var i = 0, l = word.length; i < l; i++ ) {
            Char = word[i]
            if (!( Char in node )) {
                node[Char] =  {};
            }
            node = node[Char]
        }
    },
    
  
    find: function(word) {
        node = this.root;
        word = word.concat('#');
        for ( var i = 0, l = word.length; i < l; i++ ) {
            Char = word[i]
            if (!( Char in node )) {
                return false;
            }
            node = node[Char]
        }
        return true;
    }
};