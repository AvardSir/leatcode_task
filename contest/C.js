// const { memo } = require("react");

class MinHeap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.comparator = comparator;
    }

    push(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parent]) >= 0) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length &&
                this.comparator(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }

            if (right < this.heap.length &&
                this.comparator(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }

        return top;
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
    isEmpty() { return this.heap.length === 0; }
}







// module.exports = function memeSpreadTime(subscriptions, starters, target) {
//     // Ваш код здесь
// }

function memeSpreadTime(subscriptions, starters, target) {

    let paths = new Map()


    for (let i = 0; i < subscriptions.length; i++) {
        const sub = subscriptions[i];
        let a = sub[0]
        let b = sub[1]
        let time = sub[2]
        if (!paths.has(a)) {
            paths.set(a, [])
        }

        if (!paths.has(b)) {
            paths.set(b, [])
        }
        let curAr = paths.get(a)
        curAr.push([b, time])

        let curArB = paths.get(b)
        curArB.push([b, time])

    }

    // function dfs(i, time) {

    //     if (i == target) {
    //         minTime = Math.min(minTime, time)
    //         return
    //     }
    //     if (memo.has(i)) {
    //         return
    //     }
    //     if (!paths.has(i)) {
    //         return
    //     }
    //     let curAr = paths.get(i)
    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];

    //     }
    // }


    // function dfs(i, time) {



    // }


    let minTime = Infinity

    for (let i = 0; i < starters.length; i++) {
        const start = starters[i];

        let memo = new Set()

        let heap = new MinHeap((a, b) => a[1] - b[1])
        heap.push([start, 0])

    }
    while (heap.size) {
        let [i, time] = heap.pop()


        if (i == target) {
            // minTime = Math.min(minTime, time)
            return time
        }
        if (memo.has(i)) {
            continue
        }
        // if (!paths.has(i)) {
        //     continue
        // }

        memo.add(i)
        let curAr = paths.get(i)
        for (let z = 0; z < curAr.length; z++) {
            // const curPath = curAr[i];
            let [j, curTime] = curAr[z]
            curTime += time
            heap.push([j, curTime])
        }
    }
    return minTime == Infinity ? -1 : minTime

    let hthht = 1
    console.log('1::: ', 1);

}


const subscriptions = [[1, 2, 2], [2, 3, 3], [3, 4, 1], [4, 3, 1], [1, 4, 8]];
const starters = [1, 4];
const target = 3;

console.log('', memeSpreadTime(subscriptions, starters, target));