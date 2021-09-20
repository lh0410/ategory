/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const length = nums.length;
    const dp = new Array(length).fill(1);
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[j] > nums[i]) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }
    return Math.max(...dp);
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))