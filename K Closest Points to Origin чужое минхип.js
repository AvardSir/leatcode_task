
/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new ,
        ((point) => point[0]);

        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            minHeap.enqueue([dist, x, y]);
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [_, x, y] = minHeap.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let a = new Solution()
points = [[0, 2], [2, 2]], k = 1


// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.kClosest(points, k));