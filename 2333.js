/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 *
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。

 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/word-search-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findWords = function(board, words) {
  const map = new Map(), res = []
  const [m, n] = [board.length, board[0].length];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map.has(board[i][j])) {
        map.get(board[i][j]).push([i,j]);
      } else {
        map.set(board[i][j],[[i,j]]);
      }
    }
  }
  const fn = (used, i, j, word, index) => {
    if (i < 0 || i >= m || j < 0 || j >= n || used[i][j]) {
      return false
    }
    if (board[i][j] === word[index]) {
      if (index === word.length - 1) return true
      used[i][j] = 1
      const res =  fn(used, i + 1, j, word, index + 1)
          || fn(used, i - 1, j, word, index + 1)
          || fn(used, i, j + 1, word, index + 1)
          || fn(used, i, j - 1, word, index + 1)
      used[i][j] = 0
      return res
    } else {
      return false;
    }
  }
  for (const word of words) {
    if (!map.has(word[0])) continue;
    for (let i = 0; i < map.get(word[0]).length; i++) {
      let used = new Array(m).fill(0).map(() => new Array(n).fill(0))
      let is = fn(used, map.get(word[0])[i][0], map.get(word[0])[i][1], word, 0)
      if (is) {
        res.push(word);
        break;
      }
    }
  }
  return res;
};
findWords([["a","b","c"],["a","e","d"],["a","f","g"]],
    ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"])