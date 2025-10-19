class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        let ans = []
        function dfs(j, curAr) {
            curAr.push(curAr)
            for (let i = 0; i < ans.length; i++) {
                const elAns = [...ans[i]];

                for (let z = j; z < nums.length; z++) {
                    const elNums = nums[z];

                    if (nums[z] != nums[z - 1] || z == 0) {
                        elAns.push(elNums)

                        dfs(z + 1, elAns)
                        elAns.pop()
                    }


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