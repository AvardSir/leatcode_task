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
     * @return {boolean}
     */
    hasCycle(head) {
        let s = head, f = head
        if (!f.next||  !f.next.next) {
            return false 
        }
        s = s.next
        f = f.next.next
        while (s.next && f.next.next) {
            if (s == f) {

                return true
            }
            s = s.next
            f = f.next.next


        }
        return false
    }


}







// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
