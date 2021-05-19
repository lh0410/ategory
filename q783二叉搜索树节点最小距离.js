/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  let min1 = Number.MAX_SAFE_INTEGER, pre = null;
  let find = root => {
    if (!root) return;
    find(root.left);
    if (pre) {
      min1 = Math.min(root.val - pre.val, min1);
    }
    pre = root;
    find(root.right);
  }
  find(root);
  return min1;
};
