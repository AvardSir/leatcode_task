class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = []



        function dfs(curArr, i) {
            if (curArr.length == nums.length) {

            }
            ans.push(curArr)
            for (let j = i; j < nums.length; j++) {
                const element = nums[j];

                dfs([...curArr, element], j + 1)

            }
        }

        dfs([], 0)

        return ans
    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()
nums = [1,2,3]

console.log('::: ', sol.subsets(nums) );