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
        if (this.k != 0) {
            // TODO: доделай случай k!=0

            this.k--

            // блок кода не чистый
            if (val > this.start.val) {

                let curNode = this.start
                let curVal = curNode.val

                while (true) {
                    if (curNode.next) {
                        if (curVal <= val && val < curNode.next.val) {
                            let nexPrev = curNode.next

                            curNode.next = new ListNode(val)
                            curNode = curNode.next

                            curNode.next = nexPrev
                            break
                        }
                        else {
                            curNode = curNode.next
                            curVal = curNode.val
                        }
                    }
                    else {

                        // нету следующего. 

                        curNode.next = new ListNode(val)
                        break
                    }
                }
                // this.start = this.start.next



            }
            else {
                // значение меньше вроде ничего не делаем
            }
        }
        else if (val > this.start.val) {

            let curNode = this.start
            let curVal = curNode.val
            // let prevNode = null

            while (true) {
                if (curNode.next) {
                    if (curVal <= val && val < curNode.next.val) {
                        let nexPrev = curNode.next

                        curNode.next = new ListNode(val)
                        curNode = curNode.next

                        curNode.next = nexPrev
                        break
                    }
                    else {
                        curNode = curNode.next
                        curVal = curNode.val
                    }
                }
                else {

                    // нету следующего. 

                    curNode.next = new ListNode(val)
                    break
                }
            }
            this.start = this.start.next



        }
        else {
            // значение меньше вроде ничего не делаем
        }

        return this.start.val
    }
}

// let kthLargest = new KthLargest(3, [1, 2, 3, 4]);
// // kthLargest.add(3);   // return 3
// console.log('kthLargest.add(3); ::: ', kthLargest.add(5));
// console.log('kthLargest.add(3); ::: ', kthLargest.add(6));
// console.log('kthLargest.add(3); ::: ', kthLargest.add(6));
["KthLargest", [3, [4, 5, 8, 2]], "add", [3], "add", [5], "add", [10], "add", [9], "add", [4]]

let kthLargest = new KthLargest(3, [1000, -1000]);
// kthLargest.add(3);   // return 3
console.log('kthLargest.add(3); ::: ', kthLargest.add(0));
console.log('kthLargest.add(3); ::: ', kthLargest.add(2));
console.log('kthLargest.add(3); ::: ', kthLargest.add(-3));