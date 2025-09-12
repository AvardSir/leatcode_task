const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

        let h = new MaxPriorityQueue()

        // let size = 0
        for (let i = 0; i < stones.length; i++) {
            const el = stones[i];

            h.push(el)
        }
        let size = stones.length
        // отладчиком продись
        while (size > 1) {
            let a = h.pop()
            let b = h.pop()
            size -= 2
            let c = a - b
            if (c != 0) {
                h.push(c)
                size++
            }
        }
        let pas = 1

        return size == 1 ? h.pop() : 0
    }

}


let a = new Solution()
stones = [2, 3, 6, 2, 4]
stones = [2, 3, 6, 2, 4]

a.lastStoneWeight(stones)