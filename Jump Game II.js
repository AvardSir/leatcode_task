class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length == 1) {
            return 0
        }

        let ans = 0

        let i = 0
        let delta = nums[0] //?
        while (true) {

            // nums[i] ? нынешнее число 
            // оно даст диапозон


            let jmax = i + delta
            if (jmax >= nums.length - 1) {
                return ++ans
            }

            // есть конкретные diapozon
            // i + j нужный элемент

            let j = 0
            let curMax = nums[i + j] + j
            j++
            while (i + j <= jmax) {
                curMax = Math.max(curMax, nums[i + j] + j)
                j++
            }
            // j вне jmax

            delta = curMax - delta
            i = jmax
            ans++

            // i++
        }
    }
}



let sol = new Solution()

// nums = [1, 2, 0, 1, 0]
// nums = [1, 2, 1, 0, 1]
// nums = [1, 2, 0, 1, 0]

// nums = [1, 2, 1, 0, 1]
nums = [2, 4, 1, 1, 1, 1]

nums = [2, 3, 1, 1, 4]

nums = [1, 1, 1, 1]

nums = [1, 1, 1, 1, 1]
console.log('::: ', sol.jump(nums));