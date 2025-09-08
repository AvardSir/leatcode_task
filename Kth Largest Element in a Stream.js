class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}
class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.start
        // лист нода чо сней если nums=[]
        if (k == 0 || nums.length == 0) {
            return
        }
        nums.sort((a, b) => a - b)

        let start_i
        if (k < nums.length) {
            let len = nums.length

            start_i = (len - 1) - (k - 1)

            this.k = 0

        }
        else {
            this.k = this.k - nums.length
            start_i = 0
            // случай k > nums.length
        }

        this.start = new ListNode(nums[start_i])
        let curNode = this.start
        for (let i = start_i + 1; i < nums.length; i++) {
            const element = nums[i];
            curNode.next = new ListNode(element)
            curNode = curNode.next


        }

        let pas = 1
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (!this.start) {
            if (this.k > 0) {
                this.start = new ListNode(val)
                this.k--
                return this.start.val
            }
            else {
                return
            }
        }
        if (this.k != 0 && val < this.start.val) {
            let prevStart = this.start
            this.start = new ListNode(val)
            this.start.next = prevStart
            this.k--
            return this.start.val
        }
        else if (this.k == 0 && val <= this.start.val) {
            return this.start.val
        }


        let curNode = this.start
        let prevNode = curNode
        while (true) {
            if (val > curNode.val) {
                if (curNode.next) {
                    prevNode = curNode
                    curNode = curNode.next

                }
                else {
                    curNode.next = new ListNode(val)
                    break
                }

            }
            else {
                // Ситуцаия
                // cur<val<next

                prevNode.next = new ListNode(val)
                prevNode.next.next = curNode
                break
            }
        }
        if (this.k > 0) {
            this.k--

        }
        else {
            this.start = this.start.next
        }

        return this.start.val
    }
}

let abs=new MinPriorityQueue();

// TODO: проверить доабвление 5 6 и тд

let sol = new KthLargest(1, []);
// kthLargest.add(3)   // return 3
console.log('kthLargest.add(3) ::: ', sol.add(3));
// kthLargest.add(5)   // return 3
console.log('kthLargest.add(5) ::: ', sol.add(5));

// kthLargest.add(6)   // return 3
console.log('kthLargest.add(6)  ::: ', sol.add(6));
// kthLargest.add(7)   // return 5
console.log('kthLargest.add(7)  ::: ', sol.add(7));
// kthLargest.add(8)   // return 6
console.log('kthLargest.add(8)  ::: ', sol.add(8));
