/**
 * @param {string} s
 * @return {number}
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

 整数除法仅保留整数部分。

  

 示例 1：

 输入：s = "3+2*2"
 输出：7
 示例 2：

 输入：s = " 3/2 "
 输出：1
 示例 3：

 输入：s = " 3+5 / 2 "
 输出：5

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/basic-calculator-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var calculate = function(s) {
  let stack = [], cur = 0, stackAfter = [];
  for (let i = 0; i < s.length; i++) {
    if (['+', '-', '*', '/'].includes(s[i])) {
      stack.push(cur, s[i]);
      cur = 0;
    } else if (s[i] !== ' ') {
      cur = cur * 10 + parseInt(s[i]);
    }
  }
  stack.push(cur);
  for (let i = 0; i < stack.length; ) {
    let num;
    if ('/'=== stack[i]) {
      num = ~~(stackAfter.pop() / stack[i + 1]);
      i += 2;
    } else if ('*' === stack[i]) {
      num = stackAfter.pop() * stack[i + 1];
      i += 2;
    } else {
      num = stack[i];
      i++;
    }
    stackAfter.push(num);
  }
  let res = stackAfter[0];
  for (let i = 1; i < stackAfter.length;) {
    stackAfter[i] === '+' ? (res += stackAfter[i + 1]) : (res -= stackAfter[i + 1]);
    i += 2;
  }
  return res;
};
calculate("2*3*4")
