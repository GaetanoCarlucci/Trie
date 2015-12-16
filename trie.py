#!/usr/bin/env python


class Trie:

	def __init__(self):
		self.root = dict()

	def getRoot(self):
		return self.root 


	# @param {string} word
	# @return {void}
	# Inserts a word into the trie.
	def insert(self, word):
		node = self.root
		# '#' defines the end of the word
		word = word + '#'
		print word
		for char in word:
			#  do not insert the char if it is already in the trie
			if char not in node:
				node[char] = {}
			node = node[char]
	

	def find(self, word):
		node = self.root
		# '#' defines the end of the word
		word = word + '#'
		for char in word:
			if char not in node:
				return False
			else:
				node = node[char]
		return True
		

if __name__ == '__main__':
	test = Trie()
	test.insert('attempt')
	print test.getRoot()
	print test.find('Attempt')
	print test.find('attempt')
