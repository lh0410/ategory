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
        if (i < 0 || i >= m || j < 0 || j >= m || used[i][j]) {
            return false
        }
        if (board[i][j] === word[index]) {
            if (index === word.length - 1) return true
            used[i][j] = 1
            return fn(used, i + 1, j, word, index + 1)
                || fn(used, i - 1, j, word, index + 1)
                || fn(used, i, j + 1, word, index + 1)
                || fn(used, i, j - 1, word, index + 1)
        } else {
            return false;
        }
    }
    for (const word of words) {
        if (!map.has(word[0])) continue;
        let isIn = false
        map.get(word[0]).forEach(e => {
            let used = new Array(m).fill(0).map(() => new Array(n).fill(0))
            isIn = isIn || fn(used, e[0], e[1], word, 0)
        })
        if (isIn) res.push(word)
    }
    return res;
};
findWords([["a","a"]],
    ["aa"])