function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

 返回同样按升序排列的结果链表。

  

 示例 1：


 输入：head = [1,2,3,3,4,4,5]
 输出：[1,2,5]
 示例 2：


 输入：head = [1,1,1,2,3]
 输出：[2,3]

 来源：力扣（LeetCode） 1 1
 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let zero = new ListNode(0, head), pre = zero, start = head, end = head;
  while (end) {
    while (end && end.next && end.next.val === start.val) {
      end = end.next;
    }
    if (start === end) {
      pre.next = start;
      pre = start;
    }
    start = end = end.next;
    if (!start) {
      pre.next = null;
    }
  }
  return zero.next;
};
let head1 = new ListNode(1);
let head2 = new ListNode(2);
let head3 = new ListNode(3);
let head4 = new ListNode(4);
let head5 = new ListNode(5);
head1.next = head2;
head2.next = head3;
head3.next = head4;
head4.next = head5;
deleteDuplicates(head1);
