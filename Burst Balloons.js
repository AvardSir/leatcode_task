class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let memo = new Map()

        // let ar = [1, 2]
        // ar.join('')
        function multI(arr, i) {
            if (i < 0 || i > arr.length - 1) {
                throw new Error('Сообщение об ошибке')
                // return
            }
            if (arr.length == 1) {
                return arr[0]
            }
            if (arr.length == 2) {
                return arr[0] * arr[1]
            }
            if (i == 0) {
                return arr[0] * arr[1]
            }
            if (i == arr.length - 1) {
                return arr[arr.length - 1] * arr[arr.length - 2]
            }

            return arr[i - 1] * arr[i] * arr[i + 1]
        }
        function creaIArr(arr, i) {
            return [...arr.slice(0, i), ...arr.slice(i + 1)]
        }
        // let testAr = [1, 2, 3]
        // multI(testAr, 1)
        // console.log('multI(testAr, 1)::: ', multI(testAr, 3));

        let hthth = 1
        function dfs(arr) {
            if (arr.length == 1) {
                return arr[0]
            }
            let key = arr.join('')
            if (key == '12') {
                let htht = 1
            }
            if (memo.has(key)) {
                // мб проблемы с +sum
                return memo.get(key)
            }

            let maxSum = -Infinity
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];

                let nextArr = creaIArr(arr, i)

                let nextDfs = dfs(nextArr)
                let curSum = multI(arr, i) + nextDfs
                maxSum = Math.max(maxSum, curSum)
            }
            memo.set(key, maxSum)
            return maxSum

        }
        let ans = dfs(nums)

        let memoArat = Array.from(memo)
        memoArat.sort((a, b) => a[0] - b[0])
        return ans
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

s = "caaat", t = "cat"

s = "rabbbit"
t = "rabbit"
// s = "xxyxy", t = "xy"
nums = [4, 2, 3, 7]

nums = [1, 2, 3, 4]
// nums = [2, 3, 4, 5]


console.log('::: ', sol.maxCoins(nums)); 