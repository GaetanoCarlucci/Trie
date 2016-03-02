#!/usr/bin/env python

# Author: Gaetano Carlucci

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
		
	def remove(self, word):
		# check if the word exists
		if not self.find(word):
		   return False
		
		node = self.root

		#goes to the end of the word and start to remove from there
		for char in word:
			node = node[char]

		if len(node.keys()) > 1:

		return True

if __name__ == '__main__':
	test = Trie()
	test.insert('attempt')
	print test.getRoot()
	print test.find('Attempt')
	print test.find('attempt')
	test.remove('attempt')
