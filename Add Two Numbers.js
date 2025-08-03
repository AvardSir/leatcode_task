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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        // let ans1 = new Node()
        let ans = new ListNode()
        let start_ans = ans
        // let prev
        let sum_i
        let k = 0
        let add = 0
        while (true) {
            sum_i = l1.val + l2.val + k
            // console.log('sum_i::: ', sum_i);

            if (sum_i > 9) {
                add = sum_i - 10
                // console.log('add::: ', add);
                k = 1
            }
            else {
                add = sum_i
                k = 0
            }
            ans.val = add
            console.log('ans.val::: ', ans.val);
            if (!(l1.next && l2.next)) {

                // console.log('ans::: ', ans);
                // ans.val = l1.val + l2.val
                // console.log('ans222::: ', ans);
                break
            }

            l1 = l1.next
            l2 = l2.next
            ans.next = new ListNode()
            ans = ans.next
            // console.log('ans::: ', ans);

        }

        if ((!l1.next && l2.next)) {
            ans.next = new ListNode()
            ans = ans.next
            console.log('(!l1.next && l2.next)::: ', (!l1.next && l2.next));
            l2 = l2.next
            while (true) {
                sum_i = l2.val + k

                if (sum_i > 9) {
                    add = sum_i - 10
                    // console.log('add::: ', add);
                    k = 1
                }
                else {
                    add = sum_i
                    k = 0
                }
                ans.val = add
                if (!l2.next) {
                    break
                }
                // l1 = l1.next
                l2 = l2.next
                ans.next = new ListNode()
                ans = ans.next

            }


        }
        if ((l1.next && !l2.next)) {
            console.log('l1.next && !l2.next::: ', l1.next && !l2.next);
            l1 = l1.next
            ans.next = new ListNode()
            ans = ans.next
            while (true) {
                sum_i = l1.val + k

                if (sum_i > 9) {
                    add = sum_i - 10
                    // console.log('add::: ', add);
                    k = 1
                }
                else {
                    add = sum_i
                    k = 0
                }
                ans.val = add
                console.log('ans.val::: ', ans.val);
                if (!l1.next) {
                    break
                }
                // l1 = l1.next
                l1 = l1.next
                ans.next = new ListNode()
                ans = ans.next
            }

        }
        if (!l1.next && !l2.next) {
            if (k === 1) {
                ans.next = new ListNode()
                ans = ans.next
                ans.val = 1
            }
            console.log('(!l1.next && !l2.next::: ', ans);

        }

        // console.log('start_ans::: ', start_ans);

        return start_ans
    }
}
