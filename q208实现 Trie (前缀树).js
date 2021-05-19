/**
 * Initialize your data structure here.
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 输出
 [null, null, true, false, true, null, true]

 解释
 Trie trie = new Trie();
 trie.insert("apple");
 trie.search("apple");   // 返回 True
 trie.search("app");     // 返回 False
 trie.startsWith("app"); // 返回 True
 trie.insert("app");
 trie.search("app");     // 返回 True

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var Trie = function() {
  this.chilren = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.chilren;
  for (let s of word) {
    if (!node[s]) {
      node[s] = {};
    }
    node = node[s];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.chilren;
  for (let s of word) {
    if (!node[s]) return false;
    node = node[s];
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.chilren;
  for (let s of prefix) {
    if (!node[s]) return false;
    node = node[s];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();
trie.insert("apple");
