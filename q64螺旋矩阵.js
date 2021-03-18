/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

  

 示例 1：


 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[1,2,3,6,9,8,7,4,5]
 示例 2：


 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/spiral-matrix
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var spiralOrder = function(matrix) {
  let m = matrix.length, n = matrix[0].length, res = [];
  let loop = ~~((Math.min(m, n) + 1) / 2), cur = 0;
  while (cur < loop) {
    for (let i = cur; i < n - cur; i++) {
      res.push(matrix[cur][i]);
    }
    for (let i = cur + 1; i < m - cur; i++) {
      res.push(matrix[i][n - cur - 1]);
    }
    for (let i = n - cur - 2; i >= cur && m - cur - 1 !== cur ; i--) {
      res.push(matrix[m - cur - 1][i]);
    }
    for (let i =  m - cur - 2; i >= cur + 1 &&  n - cur - 1 !== cur; i--) {
      res.push(matrix[i][cur]);
    }
    cur++;
  }
  return res;
};
var spiralOrder2 = function(matrix) {
  let m = matrix.length, n = matrix[0].length, res = [];
  let left = 0, top = 0, right = n - 1, bottom = m - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left ; i--) {
        res.push(matrix[bottom][i]);
      }
      for (let i = bottom - 1; i > top ; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return res;
}
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
