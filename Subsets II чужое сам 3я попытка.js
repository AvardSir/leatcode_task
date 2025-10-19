class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        let ans = [[]]

        for (let i = 0; i < ans.length; i++) {
            const elAns = [...ans[i]]
            if (elAns.length == nums.length) {
                ans.push([...elAns])
                continue
            }
            let ind = i
            // TODO let ind = i надо решить откуда начинать
            // мб попробовать реализовать через dfs
            let flag = true
            // Проблема что почти но не совсем. смотри log
            for (let j = ind; j < nums.length; j++) {

                if (nums[j] == nums[j - 1] && !flag) {
                    continue
                }
                flag = false
                const elNums = nums[j];

                elAns.push(elNums)
                ans.push([...elAns])
                elAns.pop()
            }

        }


        return ans
        let pas = 1
    }
}


// subsetsWithDup(nums)

let sol = new Solution()

nums = [1, 2, 1, 1]

console.log(' ::: ', sol.subsetsWithDup(nums));