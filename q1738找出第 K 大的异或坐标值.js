/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

 矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。 5 2
 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。 1 6

  

 示例 1：

 输入：matrix = [[5,2],[1,6]], k = 1
 输出：7
 解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
 示例 2：

 输入：matrix = [[5,2],[1,6]], k = 2
 输出：5
 解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
 示例 3：

 输入：matrix = [[5,2],[1,6]], k = 3
 输出：4
 解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
 示例 4：

 输入：matrix = [[5,2],[1,6]], k = 4
 输出：0
 解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var kthLargestValue = function(matrix, k) {
  let m = matrix.length, n = matrix[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n));
  dp[0][0] = matrix[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] ^ matrix[i][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] ^ matrix[0][i];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j - 1] ^ dp[i - 1][j] ^ dp[i][j - 1] ^ matrix[i][j];
    }
  }
  dp = dp.flat().sort((a, b) => b - a);
  return dp[k - 1];
};
kthLargestValue([[8,10,5,8,5,7,6,0,1,4,10,6,4,3,6,8,7,9,4,2]], 1)
