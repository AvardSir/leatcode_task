class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        let ans = []

        function dfs(j, curArr) {
            if (curArr.length == nums.length) {

                return
            }
            ans.push([...curArr])
            let flag = true
            for (let i = j; i < nums.length; i++) {


                if (i > j && nums[i] == nums[i - 1]) {
                    continue
                }
                // flag = false

                const element = nums[i];

                curArr.push(element)
                dfs(i + 1, curArr)
                curArr.pop()

            }
        }
        // TODO: еще раз осознай как решилось
        dfs(0, [])
        ans.push(nums)
        return ans
        let pas = 1
    }
}


// subsetsWithDup(nums)

let sol = new Solution()

nums = [1, 2, 1]

console.log(' ::: ', sol.subsetsWithDup(nums));