/**
 * @param {number[][]} A
 * @return {number[][]}
 *
 * 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

  

 示例 1：

 输入：[[1,1,0],[1,0,1],[0,0,0]]
 输出：[[1,0,0],[0,1,0],[1,1,1]]
 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
 然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
 示例 2：

 输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
 然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/flipping-an-image
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var flipAndInvertImage = function(A) {
  return A.map(arr => {
    if (!arr || !arr.length) {
      return [];
    }
    let i = 0, j = arr.length - 1;
    while (i <= j) {
      if (arr[i] === arr[j]) {
        arr[i] = arr[j] = (arr[i] + 1) % 2;
      }
      i++;
      j--;
    }
    return arr;
  })
};

var flipAndInvertImage2 = function(A) {
  for (let k = 0; k < A.length; k++) {
    let arr = A[k];
    if (!arr || !arr.length) {
      return [];
    }
    let i = 0, j = arr.length - 1;
    while (i <= j) {
      if (arr[i] === arr[j]) {
        arr[i] = arr[j] = 1 - arr[i];
      }
      i++;
      j--;
    }
  }
  return A;
};
flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]);
