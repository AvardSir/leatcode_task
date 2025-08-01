class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length == 1) {
            if (nums[0] == target) {
                return 0
            } else { return -1 }
        }
        let l = 0, r = nums.length - 1

        let el_l = nums[l], el_r = nums[r]

        if (el_l == target) {
            return l
        }
        if (el_r == target) {
            return r
        }
        let mid = l + Math.ceil((r - l) / 2)
        while (l != r - 1) {
            mid = l + Math.ceil((r - l) / 2)
            let el_l = nums[l], el_r = nums[r], el_mid = nums[mid]

            if (el_mid == target) {
                return mid

            }

            if (el_l < el_mid) {
                if (el_l < target && target < el_mid) {
                    r = mid
                }
                else {
                    l = mid
                }
            }
            else if (el_mid < el_r) {
                if (el_mid < target && target < el_r) {
                    l = mid
                }
                else {
                    r = mid
                }
            }
        }

        return -1
    }
}






// 
a = new Solution()
// 

nums = [4, 5, 6, 7]

nums = [3, 5, 6, 0, 1, 2], target = 3
nums = [1]
target = 0

nums = [3, 5, 1]
target = 0
console.log('Задача ответ::: ', a.search(nums, target));

