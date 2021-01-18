/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

  

 示例 1：

 输入：nums = [4,5,6,7,0,1,2], target = 0
 输出：4
 示例 2：

 输入：nums = [4,5,6,7,0,1,2], target = 3
 输出：-1
 示例 3：

 输入：nums = [1], target = 0
 输出：-1
  

 提示：

 1 <= nums.length <= 5000
 -10^4 <= nums[i] <= 10^4
 nums 中的每个值都 独一无二
 nums 肯定会在某个点上旋转
 -10^4 <= target <= 10^4

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */
var search = function(nums, target) {
  let find = (i, j) => {
    while (i <= j) {
      let mid = (i + j) >> 1;
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
         j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return null;
  }
  let split = (i, j) => {
    if (i > j) return null;
    let mid = (i + j) >> 1, res;
    if (nums[mid] >= nums[i]) {
      res = find(i, mid);
      res = res === null ? split(mid + 1, j) : res;
    } else {
      res = find(mid, j);
      res = res === null ? split(i, mid - 1) : res;
    }
    return res;
  }
  const res = split(0, nums.length - 1);
  return  res === null ? -1 : res;
};
search([3,1]
,1)
