class MedianFinder {
    constructor() {
        this.count = 0
        let minH = new MinPriorityQueue()
        let maxH = new MaxPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (maxH.size() == 0 && minH.size() == 0) {
            maxH.push(num)
            return
        }
        // честность


        if (num > maxH.front()) {
            minH.push(num)
        }
        else {
            maxH.push(num)
        }
        this.count++
        if (this.count % 2 == 0) {
            // если четное
            // взять наибольший мелкий

            // если num>max -> add в min
            return
        }
        else {
            // нечетное 
            if (minH.size() > maxH.size()) {
                let a = minH.pop()
                maxH.push(a)
            }
            else {
                let a = maxH.pop()
                minH.push(a)
            }
        }

        return
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.count % 2 == 0) {

            let a = maxH.front()
            let b = minH.front()
            return (a + b) / 2
        }
        else {
            if (minH.size() > maxH.size()) {
                return minH.front()
            }
            else {
                return maxH.front()
            }
        }
    }

}


const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
