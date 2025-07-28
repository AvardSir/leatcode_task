class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // вариант: 1 2 3
        if (nums[0] < nums[nums.length - 1]) {
            return nums[0]
        }
        let l = 0, r = nums.length - 1
        let min = Infinity
        let mid = l + Math.ceil((r - l) / 2)
        while (l < r - 1) {
            mid = l + Math.ceil((r - l) / 2)
            if (nums[l] > nums[mid]) {
                r = mid
                min = min > nums[mid] ? nums[mid] : min
            }
            else if (nums[l] < nums[mid]) {
                l = mid
                min = min > nums[mid] ? nums[mid] : min
            }
        }
        min = min > nums[l] ? nums[l] : min
        min = min > nums[r] ? nums[r] : min
        return min
    }
}




// 
a = new Solution()
// 

nums = [4, 5, 6, 7]



console.log('Задача ответ::: ', a.findMin(nums));

