class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //случай 1 ноль
        //случай 2 ноля ВСЕ ответы 0
        //общее
        let ans = Array.from({ length: nums.length }, x => 1)
        let prod_all = 1
        let count_zert = 0
        // for (const i of nums) {
        //     if (i==0) {

        //         count_zert++
        //     }
        //     prod_all *= i
        // }
        let ind_zer = 0
        for (let i = 0; i < nums.length; i++) {
            // const element = nums[i];
            if (nums[i] == 0) {
                ind_zer = i
                count_zert++
            }
            prod_all *= nums[i]
        }
        if (count_zert == 1) {
            nums[ind_zer] = 1
            prod_all = 1
            for (let i = 0; i < nums.length; i++) {

                prod_all *= nums[i]
            }
            let ans = Array.from({ length: nums.length }, x => 0)
            ans[ind_zer] = prod_all
            return ans
        }
        else if (count_zert > 1) {
            let ans = Array.from({ length: nums.length }, x => 0)
            return ans

        }
        let answer = []

        for (const i of nums) {

            answer.push(prod_all / i)
        }
        return answer
        for (let i = 0; i < nums.length; i++) {
            // const element = nums[i];
            for (let j = 0; j < i; j++) {
                // const element = nums[j];
                ans[j] = ans[j] * nums[i]
            }
        }
        return ans
    }
}
// РЕ ШЕ НО самостоятельно
// new Solution.encode(['a','b'])
a = new Solution()
nums=[-1,0,1,2,3]

tescae1 = [1, 2, 4, 6]


nums=[0,0,0]
nums=[0,0]
// tescae1=[""]

// a.productExceptSelf(tescae1)
console.log('a.productExceptSelf(tescae1)::: ', a.productExceptSelf(nums));

