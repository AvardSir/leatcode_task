class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = Array.from(new Set(candidates))

        let ans = []
        function dfs(CurTarget, i, path) {

            for (let j = i; j < candidates.length; j++) {
                const element = candidates[j];

                let NexTarget = CurTarget - element
                if (NexTarget == 0) {
                    ans.push([...path, element])
                }
                else if (NexTarget < 0) {
                    continue
                }

                dfs(NexTarget, j, [...path, element])

            }
        }

        dfs(target, 0, [])
        let a = 1
        console.log('a::: ', a);
        // console.log('let::: ', let);
    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()


nums = [2, 5, 6, 9]
target = 9
candidates = [9, 2, 2, 4, 6, 1, 5], target = 8

console.log('::: ', sol.combinationSum2(candidates, target));