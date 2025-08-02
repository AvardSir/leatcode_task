/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let l = head, r = head, l_prev = head
        if (!head.next) {
            return head.next
        }
        for (let i = 0; i < n - 1; i++) {
            // const element = array[i];
            console.log('r::: ', r);
            if (r) {

                r = r.next
                console.log('r::: ', r);

            }
            else {
                return
            }

        }
        let flag = true
        while (r.next) {
            if (flag) {
                flag = false
            }
            else {
                l_prev = l_prev.next
            }
            l = l.next
            r = r.next
        }
        if (l == head) {
            return head.next
        }
        l_prev.next = l.next
        // let l_next

        return head
    }
}
