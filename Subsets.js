class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = []


        let arElemt = []

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            ans.push(element)
            arElemt.push()
        }

        let start = 0
        let end = ans.length
        let len = 2
        while (true) {

            for (let index = start; index < end; index++) {
                const element = ans[index];

            }

            if (len == nums.length - 1) {
                // тут остановился 
            }
        }


        let i = 0

        let dif = 1
        while (true) {
            if (dif == nums.length) {
                break
            }

            let curSlice = nums.slice(i, i + dif)
            ans.push(curSlice)
            i++
            if (i == nums.length) {
                i = 0
                dif++
            }
        }
        ans.push(nums)
        return ans

    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()
s = "xyxxyzbzbbisl"

s = "(((*)"
s = "((**)"
s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"

s = '(*))'

// s = '((*)'
// s = '())'
// s = "(()"


// s = "*)**)()"
// s = '****(('

// (((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())
// сводится к ****(( 

// TODO: идея крч слева направо проверить а затем проверить справо налево
console.log('::: ', sol.checkValidString(s));