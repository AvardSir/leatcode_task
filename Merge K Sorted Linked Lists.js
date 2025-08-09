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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeKLists(lists) {
        if (lists.length === 0) {
            return new ListNode().next
        }
        if (lists.length == 1 && lists[0].length == 0) {
            return
        }
        function sortTwo(node1, node2) {
            let ans = new ListNode()
            let start = ans
            while (true) {
                if (!(node1 && node2)) {
                    if (!node1) {
                        ans = node2
                    }
                    else if (!node2) {
                        ans = node1
                    }
                    console.log('!!(node1&&node2)::: ');
                    break
                }
                if (node1.val < node2.val) {
                    ans.val = node1.val
                    if (node1.next) {
                        node1 = node1.next
                    }
                    else {
                        ans.next = node2
                        break
                    }
                }
                else {
                    ans.val = node2.val
                    if (node2.next) {
                        node2 = node2.next
                    }
                    else {
                        ans.next = node1
                        break
                    }
                }

                ans.next = new ListNode()
                ans = ans.next
            }
            return start
        }
        if (lists.length < 2) {
            if (lists[0]) {
                return lists[0]
            }
            else {
                return
            }
        }

        let temp = [...lists]
        let ans = new ListNode()
        let next_temp = []
        while (true) {
            if (temp.length == 1) {
                return temp[0]
            }
            let endTemp = temp.length
            if (temp.length % 2 != 0) {
                next_temp.push(temp[endTemp - 1])
                endTemp--
            }
            for (let i = 0; i < endTemp; i = i + 2) {
                const node1 = temp[i];
                const node2 = temp[i + 1];

                const node3 = sortTwo(node1, node2)
                next_temp.push(node3)

            }
            temp = [...next_temp]
            next_temp = []
        }
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
lists = [ar_toNode([1, 2, 4]), ar_toNode([1, 3, 5]), [ar_toNode([3, 6])]]

lists = [[1, 2, 4], [1, 3, 5], [3, 6]]


lists = lists.map((x => ar_toNode(x)))

console.log('sol.mergeKLists(lists)::: ', sol.mergeKLists(lists));