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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) {
                break;
            }
            const groupNext = kth.next;

            let prev = kth.next;
            let curr = groupPrev.next;
            while (curr != groupNext) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }
        return dummy.next;
    }

    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
let sol = new Solution()

function ar_toNode(arr) {
    let ans = new ListNode(arr[0])
    let startNode = ans
    let prev = ans
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ans.val = element
        ans.next = new ListNode()
        prev = ans

        ans = ans.next


    }
    prev.next = null
    return startNode

}

head = [1, 2, 3, 4, 5, 6]

k = 3

// head = [1, 2, 3, 4, 5]
k = 3

head = [1, 2, 3, 4, 5]
k = 1
head = ar_toNode(head)

console.log('sol.reverseKGroup(head, k)::: ', sol.reverseKGroup(head, k));