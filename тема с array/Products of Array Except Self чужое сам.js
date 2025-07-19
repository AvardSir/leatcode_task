class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = new Array(len).fill(1);

        for (let i = 1; i < len; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let i = len - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
    }
}
a = new Solution()
nums = [0, 0, 0]

nums = [0, 0]
nums = [-1, 0, 1, 2, 3]
nums = [1,2,4,6]

console.log('a.productExceptSelf(tescae1)::: ', a.productExceptSelf(nums));

