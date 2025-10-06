class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        let max = -Infinity

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            max = Math.max(max, element)
        }
        if (max < 0) {
            return max
        }
        // max = nums[0]

        let curMax = nums[0]
        for (let i = 1; i < nums.length; i++) {
            const element = nums[i];
            let curDif = curMax + element
            if (curDif < 0) {
                curMax = Math.max(0, element)
            }
            else {
                curMax = curDif
                max = Math.max(max, curMax)
            }
        }
        return max


    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let sol = new Solution()

// intervals = intervals.map((v, i) => new Interval(v[0], v[1]))


intervals = [[1, 3], [2, 3], [3, 7], [6, 6]], queries = [2, 3, 1, 7, 6, 8]
// [4,3,-1,3,-1]

// intervals = [[4, 5], [5, 8], [1, 9], [8, 10], [1, 6]]
// queries = [7, 9, 3, 9, 3]

intervals = [[1, 3], [2, 3], [3, 7], [6, 6]]
queries = [2, 3, 1, 7, 6, 8]

intervals = [[2, 3], [2, 5], [1, 8], [20, 25]]
queries = [2, 19, 5, 22]

console.log('::: ', sol.minInterval(intervals, queries));