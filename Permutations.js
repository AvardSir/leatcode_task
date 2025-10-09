class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = []
        ans.length
        function dfs(potentialAr, curArr) {
            if (potentialAr.length == 0) {
                ans.push(curArr)
            }

            for (let i = 0; i < potentialAr.length; i++) {
                const element = potentialAr[i];

                // slice по i

                // slice(i, i + 1)

                // potentialAr[i]
                // curArr = [...curArr, potentialAr[i]]
                let potentCur = [...potentialAr.slice(0, i), ...potentialAr.slice(i + 1)]

                let nextCur = [...curArr, potentialAr[i]]
                dfs(potentCur, nextCur)

            }
        }

        dfs([...nums], [])

        return ans


    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()


nums = [2, 5, 6, 9]
target = 9
candidates = [9, 2, 2, 4, 6, 1, 5], target = 8
nums=[1,2,3]

console.log('::: ', sol.permute(nums));