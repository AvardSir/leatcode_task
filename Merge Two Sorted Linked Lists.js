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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1==null) {
            return list2
        }
        if (list2==null) {
            return list1
        }
        let l1 = list1, l2 = list2

        let ans = new ListNode()
        let cur_list = ans
        let l_smal = 0, l_big = 0
        while (true) {
            if (l1.next == null || l2.next == null) {
                // прост надо понять какой куда пинуть
                if (l1.next == null) {
                    l_smal = l1
                    l_big = l2
                }
                else {
                    l_smal = l2
                    l_big = l1
                }
                // l_big.next != null
                while (l_big.next != null) {

                    if (l_smal.val > l_big.val) {
                        cur_list.next = new ListNode(l_big.val)
                        cur_list = cur_list.next
                        l_big = l_big.next

                    }
                    else {
                        cur_list.next = new ListNode(l_smal.val)
                        cur_list = cur_list.next
                        cur_list.next = l_big

                        if (ans.next) {
                            ans = ans.next
                        }
                        return ans
                        // l_smal = l_smal.next
                    }
                }
                if (l_smal.val > l_big.val) {
                    cur_list.next = new ListNode(l_big.val)
                    cur_list = cur_list.next
                    cur_list.next = new ListNode(l_smal.val)
                }
                else {
                    cur_list.next = new ListNode(l_smal.val)
                    cur_list = cur_list.next
                    cur_list.next = new ListNode(l_big.val)
                }
                if (ans.next) {
                    ans = ans.next
                }
                return ans
            }

            if (l1.val > l2.val) {

                cur_list.next = new ListNode(l2.val)
                console.log('l2.val::: ', l2.val);
                cur_list = cur_list.next
                l2 = l2.next
            }
            else {
                cur_list.next = new ListNode(l1.val)
                console.log('l1.val::: ', l1.val);
                cur_list = cur_list.next
                l1 = l1.next
            }
        }
    }
}





// 
a = new Solution()
// 


nums2 = [2, 3, 5, 6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
