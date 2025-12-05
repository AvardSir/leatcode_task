class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {

        function sum(...nums) {
            return nums.reduce((total, num) => total + num, 0);
        }

        if (sum(...nums) % 2 != 0) {
            return false
        }

        let totalSum = nums[0]

        let alCombination = new Map()
        // int->arr[index,index,index]
        alCombination.set(nums[0], [[0]])

        function chekTwoArrInd(arA, arB) {
            if (arA.length + arB.length < nums.length) {
                return false
            }

            // если копия то false
        }

        let dp = Array.from({ length: nums.length }, v => [])
        dp[0] = [nums[0]]

        // function addToAldat() {

        // }

        for (let i = 1; i < nums.length; i++) {
            const el = nums[i];
            totalSum += el

            dp[i].push(el)

            alCombination.set(nums[0], [[0]])
            
            for (let j = 0; j < i; j++) {
                const elJ = nums[j];

                let curDp = dp[j]




            }

        }

    }
}






const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


nums = [1, 2, 3, 4, 5]


console.log(' ::: ', sol.canPartition(nums));