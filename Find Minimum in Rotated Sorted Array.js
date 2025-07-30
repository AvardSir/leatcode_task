class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    search(nums, target) {

        function findMin(nums) {
            // вариант: 1 2 3
            let min = Infinity
            let min_indx = -1
            let indx_target = -1
            let isTargetFind = false

            if (nums[0] < nums[nums.length - 1]) {
                min = nums[0]
                min_indx = 0
                return [min, min_indx, indx_target, isTargetFind]
                // return [nums[0], 0]
            }
            let l = 0, r = nums.length - 1

            let mid = l + Math.ceil((r - l) / 2)
            let el = 0
            while (l < r - 1) {
                mid = l + Math.ceil((r - l) / 2)
                if (nums[l] > nums[mid]) {
                    r = mid
                    // min = min > nums[mid] ? nums[mid] : min

                    el = nums[mid]
                    if (el == target) {
                        indx_target = mid
                        min = nums[0]
                        min_indx = 0
                        isTargetFind = true
                        return [min, min_indx, indx_target, isTargetFind]
                        return mid
                    }
                    if (min > el) {
                        min = el
                        min_indx = mid
                    }
                }
                else if (nums[l] < nums[mid]) {
                    l = mid
                    // min = min > nums[mid] ? nums[mid] : min
                    el = nums[mid]
                    if (el == target) {
                        indx_target = mid
                        // min = nums[0]
                        // min_indx = 0
                        isTargetFind = true
                        return [min, min_indx, indx_target, isTargetFind]

                        return mid
                    }
                    if (min > el) {
                        min = el
                        min_indx = mid
                    }
                }
            }
            // min = min > nums[l] ? nums[l] : min
            el = nums[l]
            if (el == target) {


                min = nums[0]
                min_indx = 0

                isTargetFind = true
                indx_target = l

                return [min, min_indx, indx_target, isTargetFind]
                return l
            }
            if (min > el) {
                min = el
                min_indx = l
            }

            // min = min > nums[r] ? nums[r] : min
            el = nums[r]
            // indx_target = r
            if (el == target) {
                min = el
                min_indx = el_indx

                // isTargetFind = false
                // indx_target = l

                return [min, min_indx, indx_target, isTargetFind]
                return r
            }
            if (min > el) {
                min = el
                min_indx = r
            }

            // min = el
            // min_indx = el_indx

            // isTargetFind = false
            // indx_target = l

            return [min, min_indx, indx_target, isTargetFind]
        }


        if (nums.length<4) {
            for (let i = 0; i < nums.length; i++) {
                const element = nums[i];
                if (element==target) {
                    return i
                }
                
            }
            return -1
        }
        let [min, min_indx, indx_target, isTargetFind] = findMin(nums)
        if (isTargetFind) {
            return indx_target
        }


        let l = 0, r = 0
        if (nums[0] <= target && target <= nums[min_indx - 1]) {
            l = 0
            if (nums[l] == target) {
                return l
            }
            r = min_indx - 1
        }
        else {
            l = min_indx

            r = nums.length - 1
            if (nums[r] == target) {
                return r
            }
        }


        let mid = l + Math.ceil((r - l) / 2)

        let el = nums[l]
        if (el == target) {
            return l

        }

        el = nums[r]
        if (el == target) {
            return r

        }

        while (l != r - 1) {
            mid = l + Math.ceil((r - l) / 2)
            let el = nums[mid]

            if (target < el) {
                r = mid
            }
            else if (el < target) {
                l = mid
            }
            else if (el == target)
                return mid

        }

        return -1

        // надо вариант где НЕТУ числа проработать
        let pas = 12
    }


}






// 
a = new Solution()
// 

nums = [4, 5, 6, 7]

nums = [3, 5, 6, 0, 1, 2], target = 3
nums = [1]
target = 0

nums=[3,5,1]
target=0
console.log('Задача ответ::: ', a.search(nums, target));

