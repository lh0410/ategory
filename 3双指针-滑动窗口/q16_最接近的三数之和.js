/**
 * @param {number[]} nums
 * @param {number} target
 * @return {*[]}
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

  

 示例：
-4 -1 1 2
 输入：nums = [-1,2,1,-4], target = 1
 输出：2
 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/3sum-closest
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */
var threeSumClosest = function(nums, target) {
  if (!nums || nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let min = Infinity, res = null;
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      let value = nums[i] + nums[l] + nums[r] - target;
      if (Math.abs(value) >= min) {
        if (value < 0) {
          l++;
        } else {
          r--;
        }
      } else if (Math.abs(value) < min) {
        min = Math.abs(value);
        res = nums[i] + nums[l] + nums[r];
        if (value < 0) {
          l++;
        } else {
          r--;
        }
      }

    }
  }
  return res;
};

var threeSumClosest2 = function(nums, target) {
  if (!nums || nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let res = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if (sum > target) {
        let t = r - 1;
        while (l < t && nums[t] === nums[r]) t--;
        r = t;
      } else {
        let t = l + 1;
        while (t < r && nums[t] === nums[l]) t++;
        l = t;
      }
    }
  }
  return res;
};
threeSumClosest([-1,2,1,-4], 1);
