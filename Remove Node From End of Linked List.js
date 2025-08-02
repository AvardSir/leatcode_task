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
        if (head.next === null) {
            return head.next
        }
        let arr = []
        let head_copy = head
        while (head_copy) {
            arr.push(head_copy)
            head_copy = head_copy.next
        }
        // console.log('arr::: ', arr);

        let index_to_del = arr.length - n
        if (index_to_del==0) {
            return head.next
        }

        let whaNed_toDel = arr[index_to_del]
        // console.log('whaNed_toDel::: ', whaNed_toDel);

        let befor = arr[index_to_del - 1]
        // console.log('befor::: ', befor);
        let next_arr = arr[index_to_del + 1] || null
        // console.log('next_arr::: ', next_arr);
        befor.next = next_arr
        // console.log('befor.next::: ', befor);

        // while (head) {
        //     // head.val
        //     console.log('head.val::: ', head.val);
        //     head=head.next
        // }

        return head
    }
}






// //
// a = new Solution()
// //


// nums2 = [2, 3, 5, 6]
// console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
