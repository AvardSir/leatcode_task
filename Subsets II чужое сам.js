class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        let ans = []
        function dfs(j, curAr) {

            ans.push([...curAr])
            if (curAr.length >= nums.length) {
                return
            }

            for (let i = j; i < nums.length; i++) {
                const element = nums[i];


                if (nums[i] != nums[i - 1]) {
                    curAr.push(nums[i])
                    dfs(i + 1, curAr)
                    curAr.pop()
                }


            }
        }

        dfs(0, [])


        return ans
        let pas = 1
    }
}


// subsetsWithDup(nums)

let sol = new Solution()

nums = [3, 1, 2, 1]

console.log(' ::: ', sol.subsetsWithDup(nums));