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
     * @return {void}
     */
    reorderList(head) {
        if (head.next===null) {
            return
        }
        let cur = head
        let s = head, f = head

        // console.log('::1: ');
        while (f.next) {
            s = s.next
            if (!f.next.next) {
                f = f.next
                break
            }
            f = f.next.next
        }
        console.log('s::: ', s.val);

        let s_next, s_prev, s_cur = s
        s_next = s.next
        s_prev = s
        s_cur.next = null
        s_cur = s_next

        while (true) {
            if (s_cur.next === null) {
                s_cur.next = s_prev
                break
            }
            s_next = s_cur.next
            s_cur.next = s_prev
            s_prev = s_cur
            s_cur = s_next
        }
        console.log('s_cur::: ', s_cur);

        let next_cur, prev_cur = cur
        while (true) {
            console.log('cur::: ', cur.val);

            if (cur === s) {
                // console.log('ыафаы::: ', cur.val);
                break
            }
            next_cur = cur.next // 2

            s_next = s_cur.next

            cur.next = s_cur
            if (s_cur === s) {
                // console.log('ыафаы::: ', cur.val);
                break
            }

            s_cur.next = next_cur
            s_cur = s_next
            cur = next_cur


        }




        // let head2 = head

        // console.log('head2::: ', head2);

        // while (true) {
        //     if (head2.next == null) {
        //         // head2.val
        //         console.log('head2.val::: ', head2.val);
        //         break
        //     }
        //     console.log('head2.val::: ', head2.val);
        //     head2 = head2.next
        // }

        // console.log('cur::: ', cur.val);


        // console.log('s_cur::: ', s_cur);
        // console.log('s_cur.next::: ', s_cur.next);

        return
    }
}







// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
