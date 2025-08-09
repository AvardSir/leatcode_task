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
        if (k==1) {
            return head
        }
        function reversNode(node) {
            let prevPrev = node
            let curCur = node.next
            let nexCur = curCur.next
            prevPrev.next = null
            while (curCur) {
                nexCur = curCur.next
                curCur.next = prevPrev
                prevPrev = curCur
                curCur = nexCur
            }
            return prevPrev
        }

        //TODO: 2й тест кейс провирть
        let beforeSeq = null
        let firstNodeSeq = head
        let lastNodeSeq = head
        let afterSeq = head

        let startALL = null
        while (true) {

            lastNodeSeq = afterSeq
            firstNodeSeq = afterSeq
            // цель блока: найти последний элемент
            for (let curK = 0; curK < k - 1; curK++) {
                if (lastNodeSeq.next) {
                    lastNodeSeq = lastNodeSeq.next
                }
                else {
                    if (startALL) {
                        if (beforeSeq && beforeSeq != firstNodeSeq) {
                            beforeSeq.next = firstNodeSeq
                        }

                        return startALL
                    }
                    else {
                        return head
                    }
                }
            }

            if (lastNodeSeq.next) {
                afterSeq = lastNodeSeq.next
                lastNodeSeq.next = null
            }

            let reveNodeListSeq = reversNode(firstNodeSeq)

            if (!startALL) {
                startALL = lastNodeSeq
            }
            else {
                beforeSeq.next = lastNodeSeq
            }
            if (beforeSeq) {
                beforeSeq.next = reveNodeListSeq
            }

            beforeSeq = firstNodeSeq


        }

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

head=[1,2,3,4,5]
k=1
head = ar_toNode(head)

console.log('sol.reverseKGroup(head, k)::: ', sol.reverseKGroup(head, k));