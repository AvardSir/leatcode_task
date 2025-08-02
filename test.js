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
    removeNthFromEnd(head, n) { }
}

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

let a1 = new ListNode(1)
let a2 = new ListNode(2, a1)
let a3 = new ListNode(3, a2)
let step = a3
let arr = [a1, a2, a3]
arr[1].next = null
while (step) {
    console.log('step::: ', step);
    step = step.next

}


// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
