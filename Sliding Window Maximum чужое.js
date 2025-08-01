class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0, r = 0
        // while (r<nums.length) {

        //         nums

        //         l++
        //         r++
        //     }
        let stack = [[nums[0],0+k]]
        for (let i = 1; i < k; i++) {
            const el_i = nums[i];
            for (let j = stack.length - 1; j >= 0; j--) {
                const el_stack = stack[j][0];
                if (el_stack < el_i) {
                    stack.pop()
                }

            }
            stack.push([el_i,i+k])
            // [el_i,i+k]
            
        }
        let ans = []
        ans.push(stack[0][0])

        for (let i = k; i < nums.length; i++) {
            const el_i = nums[i];
            if (i == 2) {

            }
            if (stack.length == k || stack[0][1]==i) {
                stack.shift()
            }
            for (let j = stack.length - 1; j >= 0; j--) {
                const el_stack = stack[j][0];
                if (el_stack < el_i) {
                    stack.pop()
                }

            }
            stack.push([el_i,i+k])
            ans.push(stack[0][0])
            // if (el>stack[stack.length-1]){

            // }
        }

        return ans
    }
}



// 
a = new Solution()
// 
nums = [1, 2, 1, 0, 4, 2, 6], k = 3

// nums=[1,3,1,2,0,5]
// k=3
console.log('Задача ответ::: ', a.maxSlidingWindow(nums, k));

