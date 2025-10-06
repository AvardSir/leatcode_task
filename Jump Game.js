class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let ans = false

        let memo = new Set()

        function dfs(i) {
            if (ans) {
                return
            }
            if (memo.has(i)) {
                return
            }
            let curNum = nums[i]
            for (let j = i + curNum; j > i; j--) {
                if (ans) {
                    return
                }
                // const element = nums[j];
                if (memo.has(j)) {
                    continue
                }
                if (j > nums.length - 2) {
                    ans = true
                    return
                }
                if (nums[j] != 0) {
                    // memo.add(j)
                    dfs(j)

                }
                memo.add(j)

                // memo.add(j)


            }
            memo.add(i)


        }

        dfs(0)

        return ans
    }
}




let sol = new Solution()

nums = [1, 2, 0, 1, 0]
nums = [1, 2, 1, 0, 1]
nums = [1, 2, 0, 1, 0]

nums = [1, 2, 1, 0, 1]


console.log('::: ', sol.canJump(nums));