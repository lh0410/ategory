/**
 * @param {number[]} arr
 * @return {number}
 *
 * 符合下列属性的数组 arr 称为 山脉数组 ：
 arr.length >= 3
 存在 i（0 < i < arr.length - 1）使得：
 arr[0] < arr[1] < ... arr[i-1] < arr[i]
 arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

  

 示例 1：

 输入：arr = [0,1,0]
 输出：1
 示例 2：

 输入：arr = [0,2,1,0]
 输出：1
 示例 3：

 输入：arr = [0,10,5,2]
 输出：1
 示例 4：

 输入：arr = [3,4,5,1]
 输出：2
 示例 5：

 输入：arr = [24,69,100,99,79,78,67,36,26,19]
 输出：2
  

 提示：

 3 <= arr.length <= 104
 0 <= arr[i] <= 106
 题目数据保证 arr 是一个山脉数组

 */
var peakIndexInMountainArray = function(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let mid = ~~((r + l) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid - 1]) {
      r = mid;
    } else if (arr[mid] < arr[mid + 1]) {
      l = mid;
    }
  }
};
peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19])
