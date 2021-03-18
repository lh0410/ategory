function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 *
 * 给你单链表的头节点 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
  

 示例 1：


 输入：head = [1,2,3,4,5], left = 2, right = 4
 输出：[1,4,3,2,5]
 示例 2：

 输入：head = [5], left = 1, right = 1
 输出：[5]
  

 提示：

 链表中节点数目为 n
 1 <= n <= 500
 -500 <= Node.val <= 500
 1 <= left <= right <= n


 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var reverseBetween = function (head, left, right) {
  if (left >= right) return head;
  let pre = null, next, curIndex = 0, start, noob = new ListNode(0, head), cur = noob;
  while (curIndex < left) {
    curIndex++;
    pre = cur;
    cur = cur.next;
    start = cur;
    // cur = leftNode, pre为cur的前置节点 start为leftNode
  }
  let preOfReverse = null;
  while (curIndex <= right) {
    next = cur.next;
    cur.next = preOfReverse;
    preOfReverse = cur;
    cur = next;
    curIndex++;
  }
  if (pre)  pre.next = preOfReverse;
  if (start) start.next = next;
  return noob.next;
};
var reverseBetween2 = function (head, left, right) {
  let curIndex = 0, pre, noob = new ListNode(0, head), cur = noob, next;
  while (curIndex < left) {
    pre = cur;
    cur = cur.next;
    curIndex++;
  }
  //[1,2,3,4,5]
  while (curIndex < right) {
    next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
    curIndex++;
  }
  return noob.next;
}

let head1 = new ListNode(1);
let head2 = new ListNode(2);
let head3 = new ListNode(3);
let head4 = new ListNode(4);
let head5 = new ListNode(5);
head1.next = head2;
head2.next = head3;
head3.next = head4;
head4.next = head5;
reverseBetween2(head1, 2, 4)
