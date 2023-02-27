/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head,
    size = 0;
  while (node) {
    node = node.next;
    size++;
  }

  if (size === n) return head.next;
  node = head;
  for (let i = 1; i < size - n; i++) {
    node = node.next;
  }
  node.next = node.next.next;
  return head;
};
