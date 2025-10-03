class MedianFinder {
    constructor() {
        this.curMedian = null
        this.heap = new MaxPriorityQueue()
        this.len = 0
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.heap.push(num)

        this.len++

        this.curMedian = null
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.curMedian != null) {
            return this.curMedian
        }
        console.log('this.heap.front()::: ', this.heap.front());

        let howMuchTodel = Math.ceil(this.len) / 2 - 1

        // копия
        let arrHeap = this.heap.toArray()
        let copyHeap = new MaxPriorityQueue()
        for (let i = 0; i < arrHeap.length; i++) {
            const element = arrHeap[i];

            copyHeap.push(element)

        }
        // console.log('howMuchTodel::: ', howMuchTodel);

        // цикл удаления по копии
        for (let i = 0; i < howMuchTodel; i++) {
            // const element = copyHeap[i];

            copyHeap.pop()
        }
        // copyHeap.front()
        // console.log('copyHeap.front()::: ', copyHeap.front());
        // опредие четности 
        if (this.len % 2 == 0) {
            // четный
            // медиана это
            let a = copyHeap.pop()
            let b = copyHeap.front()
            return (a + b) / 2
        }
        else {
            // нечетный 
            return copyHeap.front()
        }
    }
}




const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
