/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。

  

 示例 1：

 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 输出："apple"
 示例 2：

 输入：s = "abpcplea", dictionary = ["a","b","c"]
 输出："a"

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findLongestWord = function (s, dictionary) {
    let res = '';
    for (let k = 0; k < dictionary.length; k++) {
        let i =0, j = 0;
        while (i < s.length && j < dictionary[k].length) {
            if (s[i] === dictionary[k][j]) {
                j++;
            }
            i++;
        }
        if (j === dictionary[k].length) {
            if (j > res.length || (j === res.length && dictionary[k] < res)) {
                res = dictionary[k];
            }
        }
    }
    return res;
};

findLongestWord("abce",
    ["abe","abc"])