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
        let set_Cycle=new Set()

        while (head.next!=null) {
            if (set_Cycle.has(head)) {
                return true
            }
            set_Cycle.add(head)
            head=head.next
        }
        return false
    }
}





// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
