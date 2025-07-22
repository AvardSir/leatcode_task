class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // numbers=numbers.filter(x=>x<target)
        let left = 0, right = numbers.length - 1
        let len = numbers.length - 1
        while (true) {
            let cur = target - (numbers[left] + numbers[right])
            if (cur == 0) {
                return [numbers[left], numbers[right]]
            }
            if (cur > 0) {
                left++
            }
            if (cur < 0) {
                right--
            }
        }
    }
}







// 
a = new Solution()
// 

numbers = [1, 2, 3, 4], target = 3
// numbers = [2, 3, 4]
// target = 6

console.log('Задача ответ::: ', a.twoSum(numbers, target));

