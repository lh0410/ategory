/**
 * @param {number} n
 * @return {number[][]}
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

  

 示例 1：


 输入：n = 3
 输出：[[1,2,3],[8,9,4],[7,6,5]]
 示例 2：

 输入：n = 1
 输出：[[1]]
  

 提示：

 1 <= n <= 20


 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var generateMatrix = function(n) {
  if (!n) return [];
  let res = new Array(n).fill(0).map(e => new Array(n).fill(0));
  let cur = 0, index = 1;
  while (index <= n * n) {
    for (let i = cur; i < n - cur; i++) {
      res[cur][i] = index++;
    }
    for (let i = cur + 1; i < n - cur; i++) {
      res[i][n - cur - 1] = index++;
    }
    for (let i = n - cur - 2; i >= cur && n - cur - 1 !== cur ; i--) {
      res[n - cur - 1][i] = index++;
    }
    for (let i =  n - cur - 2; i >= cur + 1 &&  n - cur - 1 !== cur; i--) {
      res[i][cur] = index++;
    }
    cur++;
  }
  return res;
};
generateMatrix(3);
