class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = new Map()

        let val = nums[0]
        let isFirst = true
        memo.set(0, [val, isFirst])

        val = nums[1]
        isFirst = false
        memo.set(1, [val, isFirst])

        val = nums[2] + nums[0]
        isFirst = true
        memo.set(2, [val, isFirst])


        function dfs(i) {
            if (memo.has(i)) {
                return memo.get(i)
            }
            if (i < 0) {
                return memo.get(0)
            }

            let leftNode = dfs(i - 2)
            let leftVal = leftNode[0]
            let leftIsfirst = leftNode[1]


            let righNode = dfs(i - 3)
            let rightVal = righNode[0]
            let rightIsfirst = righNode[1]

            let nodeToReturb
            if (leftVal > rightVal) {
                nodeToReturb = [leftVal + nums[i], leftIsfirst]
            }
            else {
                nodeToReturb = [rightVal + nums[i], rightIsfirst]
            }

            memo.set(i, nodeToReturb)
            return nodeToReturb
        }
        // let endNode = dfs(nums.length - 1)
        // let endVal = endNode[0]
        // let endIs = endNode[1]

        let preEndNode = dfs(nums.length - 2)
        let PreEndVal = preEndNode[0]
        let PreEndIs = preEndNode[1]

        let leftNod = dfs(nums.length - 3) //8
        let valLeftNode = leftNod[0] + nums[nums.length - 1]
        let isLeftNode = leftNod[1]
        if (isLeftNode) {
            valLeftNode = valLeftNode - Math.min(nums[0], nums[nums.length - 1])
        }

        let rNod = dfs(nums.length - 4) //8
        let valRNode = rNod[0] + nums[nums.length - 1]
        let isRNode = rNod[1]
        if (isRNode) {
            valRNode = valRNode - Math.min(nums[0], nums[nums.length - 1])
        }

        return Math.max(valRNode, valLeftNode, PreEndVal)


        if (PreEndVal > endVal) {
            return PreEndVal
        }

        if (!endIs) {
            return endVal
        }
        let maxValInThisPosisiton = Math.max(PreEndVal, endVal - nums[0], endVal - nums[nums.length - 1])
        return maxValInThisPosisiton
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

n = 3
cost = [1, 2, 3]
nums = [1, 1, 3, 3]
nums = [1, 1, 3, 3]
nums = [2, 9, 8, 3, 6]
nums = [1, 1, 3, 3]
nums = [1, 2, 3, 1]
nums = [0]

nums = [2, 9, 8, 3, 6]

console.log(' ::: ', sol.rob(nums));