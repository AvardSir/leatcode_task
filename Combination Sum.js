class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = []
        function dfs(curTarger, path, j) {

            // if (curTarger == 0) {
            //     ans.push(path)
            // }
            // if (curTarger < =) {

            // }

            for (let i = j; i < nums.length; i++) {
                const element = nums[i];

                let curNextTarget = curTarger - element
                if (curNextTarget == 0) {
                    ans.push([...path, element])
                }
                else if (curNextTarget < 0) {
                    continue
                }
                dfs(curNextTarget, [...path, element], i)

            }
        }

        dfs(target, [], 0)


        return ans
    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()


nums = [2, 5, 6, 9]
target = 9

console.log('::: ', sol.combinationSum(nums, target));