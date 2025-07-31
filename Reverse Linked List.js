/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
class Solution {

    /**
        * @param {ListNode} head
        * @return {ListNode}
        */
    reverseList(head) {
        let revers = []
        if (head == null) {
            return null
        }
        if (head.next === null) {
            return head
        }

        // do {
        //     revers.push(head.val)
        //     head = head.next
        // } while (head.next != null);

        while (head.next != null) {

            revers.push(head.val)
            head = head.next
        }
        if (head.val !== null) {
            revers.push(head.val)
            // console.log('Зашлиhead.val)::: ', revers.push(head.val));

        }
        // console.log('head.next::: ', head.val);


        // console.log('revers::: ', revers);

        let ans = new ListNode(revers[revers.length - 1])
        let first = ans
        for (let i = revers.length - 2; i >= 0; i--) {
            // revers[i - 1]
            ans.next = new ListNode(revers[i])
            ans = ans.next
            // const element = revers[i];
            // ans

        }

        return first

    }

}




// 
a = new Solution()
// 


nums1 = [1, 2, 3], nums2 = [1, 2, 3, 4]
nums1 = [1, 2, 3, 7], nums2 = [1, 2, 3, 6]
// nums1 = [1, 2, 3, 4], nums2 = [1, 5, 7, 8]
// nums1 = [1, 2, 3, 4], nums2 = [5, 7, 8]
// nums1 = [1, 2, 3], nums2 = [1, 2, 3]

nums1 = [1, 3]
nums2 = [2]



// не решает вообще разобрать
nums1 = [1, 2]
nums2 = [3, 4]

nums1 = []
nums2 = [1]

nums1 = [2]
nums2 = []


nums1=[1,4,7]
nums2=[2,3,5,6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
