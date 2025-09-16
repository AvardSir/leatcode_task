class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        function partition(left, right) {
            const mid = Math.floor((left + right) / 2);

            [nums[mid], nums[left + 1]] = [nums[left + 1], nums[mid]];
            // середину и правей лева меняют местами
            if (nums[left] < nums[right])
                // если левый элемент меньше правого
                [nums[left], nums[right]] = [nums[right], nums[left]];
            // меняем местами левый и правый
            if (nums[left + 1] < nums[right])
                [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
            if (nums[left] < nums[left + 1])
                [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];

            const pivot = nums[left + 1];
            let i = left + 1;
            let j = right;

            while (true) {
                while (nums[++i] > pivot);
                while (nums[--j] < pivot);
                if (i > j) break;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }

            nums[left + 1] = nums[j];
            nums[j] = pivot;
            return j;
        }

        function quickSelect(k) {
            let left = 0;
            let right = nums.length - 1;
            // left это начало end конец 
            let leftEl = nums[left]
            let rEl = nums[right]
            while (true) {
                if (right <= left + 1) {
                    // если индекс конца меньше или равен индексу конца 
                    // тоесть левый правее правого
                    if (right == left + 1 && nums[left] < nums[right])
                        // TODO: не ясно почему если левый элемент<правого
                        // если правый индекс=левому индексу +1
                        // тоесть разница в 1 
                        // а также если правое число больше левого числа 

                        [nums[left], nums[right]] = [nums[right], nums[left]];
                    // меняем левое и правое число

                    return nums[k];
                }

                const j = partition(left, right);

                if (j >= k) right = j - 1;
                if (j <= k) left = j + 1;
            }
        }

        return quickSelect(k - 1);
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');


let a = new Solution()
nums = [2, 3, 1, 5, 4]
k = 3


// nums = [5, 2, 4, 1, 3, 6, 0]
// k = 4


// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.findKthLargest(nums, k));