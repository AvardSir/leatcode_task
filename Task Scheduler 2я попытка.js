class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // console.log('tasks::: ', tasks);

        let pack_size = n + 1

        let mp = new Map()
        for (let i = 0; i < tasks.length; i++) {
            const element = tasks[i];
            if (!mp.has(element)) {
                mp.set(element, 1)

            }
            else {
                mp.set(element, mp.get(element) + 1)
            }

        }

        // mp -> heap
        let arrMp = Array.from(mp)

        let heap = new MaxPriorityQueue()
        for (let i = 0; i < arrMp.length; i++) {
            const element = arrMp[i];
            heap.push(element[1])

        }
        // heap.isEmpty()
        let fullPack = n + 1
        let ans = 0
        let maxInPack

        while (!heap.isEmpty()) {
            // 

            let lastPack = 0
            maxInPack = null

            let curNode 

            let countLastPack = 0
            for (let j = 0; j < fullPack; j++) {

                if (heap.isEmpty()) {
                    break
                }
                curNode = heap.pop()
                if (!maxInPack) {
                    maxInPack = curNode
                }
                if (maxInPack == curNode) {
                    countLastPack++
                }
            }
            ans += (maxInPack- 1) * (fullPack ) + countLastPack
            // maxInPack = null
        }
        return ans

        let chek1 = 1

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');


let a = new Solution()


tasks = ["A", "A", "A", "B", "C"], n = 3

// Output: 9

// E все сломало. 
tasks=["A","A","A","B","B","B","C","C","C","D","D","E"]
n=2



// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.leastInterval(tasks, n));