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
        let startNode = head
        let curNode = head
        let prevNode = null
        let nextNode
        if (head.next) {
            nextNode = head.next
        }
        else {
            return head
        }
        let prevPrev = head
        let curCur = head
        curCur = curCur.next
        curCur.next = prevPrev
        return curCur

        //TODO: тестить
        // while (true) {
        //     let curK = k
        //     let startCur = curNode
        //     let starSequence = curNode
        //     let startNextSeq
        //     while (true) {
        //         if (curK == 0) {
        //             starSequence.next = curNode.next
        //             startNextSeq = curNode.next
        //             break
        //         }

        //         curK--
        //         curNode = curNode.next


        //     }
        //     curK = k //
        //     curNode = startCur
        //     prevNode = startCur
        //     if (curNode.next) {
        //         curNode = curNode.next
        //     }

        //     while (true) {


        //         nextNode = curNode.next //1 2 3 //сылка на 3
        //         curNode.next = prevNode //2->1
        //         prevNode = curNode//2 эт прошлое

        //         curNode = nextNode //работаем с 3

        //         if (curK == 0) {
        //             break
        //         }
        //         if (!curNode) {
        //             return startNode
        //         }


        //         curK--
        //     }
        //     curNode = startNextSeq

        // }
    }
}




// отладка ааа

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
head = ar_toNode(head)
k = 3

console.log('sol.reverseKGroup(head, k)::: ', sol.reverseKGroup(head, k));