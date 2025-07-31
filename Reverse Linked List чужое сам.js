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
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) {
            return null
        }
        let prev_head = null
        let next_head = head.next
        let cur_head = 0
        while (true) {
            if (head.next == null) {
                // cur_head = head
                head.next = prev_head
                return head
                // break
            }
            // console.log('head.val::: ', head.val);

            // console.log('head.next::: ', head.next);
            next_head = head.next
            head.next = prev_head

            prev_head = head
            head = next_head




            // prev_head.next =


        }
    }
}




// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
