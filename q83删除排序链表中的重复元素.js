/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let cur = head, next = head.next;
  while (next) {
    while (next && cur.val === next.val) {
      next = next.next;
    }
    cur.next = next;
    if (next) {
      cur = next;
      next = next.next;
    }
  }
  return head;
};
