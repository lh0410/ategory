/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head;
  }
  let n = 1, tail = head;
  while (tail.next) {
    n++;
    tail = tail.next;
  }
  tail.next = head;
  for (let i = 0; i < n - k % n; i++) {
    tail = tail.next;
  }
  let res = tail.next;
  tail.next = null;
  return res;
}
