class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let kInd = (nums.length - 1) - (k - 1)
        // обьявить 
        // nums.sort()
        let start = 0, end = nums.length - 1


        while (true) {
            let i = start, j = start
            let pivot = nums[end] //это имено объект
            if (pivot == 3) {
                let pa = 1
            }
            while (true) {

                let i_el = nums[i]
                let j_el = nums[j]
                if (j == end) {

                    // i->end
                    [nums[i], nums[end]] = [nums[end], nums[i]]
                    break
                }
                if (i_el <= pivot) {
                    // j -> i, j -> i
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                    i++
                }
                j++

            }
            if (kInd == i) {
                return nums[i]
            }
            if (kInd < i) {
                end = i - 1
            }
            else {
                start = i + 1
            }
        }

    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');


let a = new Solution()
nums = [2, 3, 1, 5, 4]
k = 2


nums = [5, 2, 4, 1, 3, 6, 0]
k = 4


// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.findKthLargest(nums, k));