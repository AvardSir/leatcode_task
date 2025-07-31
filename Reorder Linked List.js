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
        // console.log('head::: ', head);

        let start_head = head
        let arr_head = [head]

        // while (start_head.next != null) {
        //     start_head = start_head.next
        //     arr_head.push(start_head)
        // }
        let head_next = 0
        // console.log('head_next::: ', head_next);
        for (let i = 0; i < Math.floor(arr_head.length); i++) {

            head_next = head.next
            // head.next = arr_head[arr_head.length - 1 - i]
            head.next.next=head_next
            head = head.next.next
        }
        return

    }
}







// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
