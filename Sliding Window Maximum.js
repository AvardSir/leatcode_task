class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = -Infinity
        let max_indx = -1
        // for (let i = 0; i < k; i++) {
        //     const el = nums[i];
        //     max = max < el ? el : max
        //     max_indx = i
        // }

        let ans = []
        for (let i = 0; i < nums.length - 1 - (k - 2); i++) {
            // const el = array[i];
            let start = i
            let end = start + k - 1
            if (start <= max_indx && max_indx <= end) {

                if (max < nums[end]) {
                    max = nums[end]
                    max_indx = end
                }

                ans.push(max)


                continue
            }
            let cur_max = -Infinity
            let cur_max_indx = -1
            for (let j = start; j < end + 1; j++) {
                const el_search_max = nums[j];
                if (cur_max < el_search_max) {
                    cur_max = el_search_max
                    cur_max_indx = j
                }


                // cur_max = cur_max < el_search_max ? el_search_max : cur_max

            }
            max = cur_max
            max_indx = cur_max_indx

            ans.push(max)


        }
        let a2 = 2
        return max == -Infinity ? [] : ans
    }



}



// 
a = new Solution()
// 
nums = [1, 2, 1, 0, 4, 2, 6], k = 3

console.log('Задача ответ::: ', a.maxSlidingWindow(nums, k));

