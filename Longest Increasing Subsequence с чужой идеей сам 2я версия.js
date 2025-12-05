class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        let dp = [nums[0]]
        function binarySerch(el) {
            let l = 0, r = dp.length - 1
            let mid = 0

            function findMid(r, l) {
                return Math.floor((r + l) / 2)
            }

            while (l < r) {
                mid = findMid(r, l)
                let midEl = dp[mid]

                if (midEl < el) {
                    l = mid + 1
                }

                else {
                    r = mid
                }



            }
            mid = findMid(r, l)
            dp[mid] = el

        }

        for (let i = 1; i < nums.length; i++) {
            const el = nums[i];
            if (el == 2) {
                let chehl = 1
            }
            if (el > dp[dp.length - 1]) {
                dp.push(el)
                continue
            }


            // поиск el<=dp[i]
            binarySerch(el)
        }

        return dp.length
    }
}






const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()


coins = [1, 5, 10], amount = 12
nums = [1, 2, -3, 4]

nums = [-2, 0, -1]

// nums = [-3, -1, -1]
// nums = [-1, -1]

// nums = [-4, 1, -3, 1, -2, 10]

nums = [2, 3, -2, 4]

nums = [0]
nums = [-3, -1, -1]
s = "applepenapple", wordDict = ["apple", "pen", "ape"]

// s = "catsincars"
// wordDict = ["cats", "cat", "sin", "in", "car"]

nums = [9, 1, 4, 2, 3, 3, 7]
// nums = [0, 3, 1, 3, 2, 3]


// nums = [4, 10, 4, 3, 8, 9]

// nums = [9, 1, 4, 2, 3, 3, 7]
// nums = [4, 10, 4, 3, 8, 9]

nums = [3, 5, 5, 5, 1, 4, 19, 5, 6, 7, 12]

console.log(' ::: ', sol.lengthOfLIS(nums));