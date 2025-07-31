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

        // console.log('::2: ');

        // крч проблема если list четный по length
        // то тогда s=должен быть правей

        // если нечетный тоже? проверь

        // 2й этап от конца до середины стрелки
        // поменять направления
        // let cur_s = s
        // let prev_s = s
        // let next_s
        // if (cur_s.next) {
        //     cur_s = cur_s.next
        //     next_s = cur_s.next

        // }

        // prev_s.next = null
        // while (true) {
        //     if (cur_s == f) {
        //         cur_s.next = prev_s
        //         console.log('cur_s::: ', cur_s);
        //         break
        //     }
        //     console.log('cur_s::: ', cur_s);

        //     next_s = cur_s.next
        //     cur_s.next = prev_s
        //     prev_s = cur_s
        //     cur_s = cur_s.next
        // }


        // 3й этап  сбор всего
        // while (cur != s) {
        //     cur
        // }


    }
}







// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
