class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return root;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    sinkDown(index) {
        const length = this.size();
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let swap = null;
            let element = this.heap[index];

            if (leftChild < length && this.heap[leftChild] < element) {
                swap = leftChild;
            }

            if (rightChild < length) {
                if ((swap === null && this.heap[rightChild] < element) ||
                    (swap !== null && this.heap[rightChild] < this.heap[leftChild])) {
                    swap = rightChild;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // console.log('points::: ', points);

        if (points.length <= k) {
            return points
        }
        function sqrt(x) {
            return Math.sqrt(x)
        }

        function getDistans([x, y]) {
            let distans = (sqrt((x) ** 2 + (y) ** 2))
            return distans
        }
        // ПРОБЛЕМА с MinHeap не обьявлен.
        // можно либо взять из сайта
        // либо обьявить внутри свой варик

        let h = new MinHeap()
        let disToPoint = new Map()

        for (let i = 0; i < points.length; i++) {
            const element = points[i];
            let dist = getDistans(element)

            if (!disToPoint.has(dist)) {
                disToPoint.set(dist, [element])
            }
            else {
                let arrOFDist = disToPoint.get(dist)
                arrOFDist.push(element)
            }
            // disToPoint.set(distans)
            h.push(dist)
        }

        // TODO: не забудь случай када 3 точки с равной дистанцией 
        // а вот k=2 
        // тоесть точки == по дистанции
        let ans = []
        for (let i = 0; i < k; i++) {
            // const element = array[i];
            let lastDist = h.pop()
            let arrOfPoints = disToPoint.get(lastDist)
            let lastPoint = arrOfPoints.pop()

            ans.push(lastPoint)
            // for (let j = 0; j < arrOfPoints.length; j++) {
            //     const element = arrOfPoints[j];
            //     ans.push(element)

            // }

        }
        return ans
    }
}


let a = new Solution()
points = [[0, 2], [2, 2]], k = 1


// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.kClosest(points, k));