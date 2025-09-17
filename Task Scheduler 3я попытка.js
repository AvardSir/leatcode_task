class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        if (tasks.length == 0) {
            return 0
        }
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

        let t = 0
        // let curH = heap.pop()
        // let what?[curH, t + n + 1]
        let quequ = []
        let ans = 0
        // let elQuer=[intt,t]
        while (true) {

            // let curNode = heap.pop()
            if (quequ.length) {
                let firstTimeFree = quequ[0][1]
                if (t >= firstTimeFree) {
                    // условие ?
                    // TODO:отладить гдет ошибка  тут наверна
                    let curNode = quequ.shift()
                    // curNode[0]--
                    let curInt = curNode[0]

                    heap.push(curInt)

                    // ans++
                    // t++
                    continue

                }
            }
            else if (heap.isEmpty()) {
                break
            }


            if (!heap.isEmpty()) {
                let curInt = heap.pop()
                if (curInt > 1) {
                    quequ.push([curInt - 1, t + n + 1])
                }
            }
            ans++
            t++
        }


        return ans


    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');


let a = new Solution()


tasks = ["A", "A", "A", "B", "C"], n = 2

// Output: 9

// E все сломало. 
// tasks = ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"]
// n = 2

tasks = ["X", "X", "Y", "Y"]
n = 2


// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.leastInterval(tasks, n));