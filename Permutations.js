class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length == 0) {
            return nums
        }
        let ans = [nums[0]]

        if (nums.length == 1) {
            // console.log('nums::: ', nums);

            return [nums]
        }
        ans = [[nums[1], nums[0]], [nums[0], nums[1]]]
        for (let i = 2; i < nums.length; i++) {
            const element = nums[i];


            let nextAns = []
            for (let j = 0; j < ans.length; j++) {
                const elJ = ans[j];

                // left
                nextAns.push([element, ...elJ])
                // rigght
                nextAns.push([...elJ, element])
                // midle


                for (let z = 1; z < elJ.length; z++) {
                    // const elZZZ = elJ[z];
                    let ar = []
                    nextAns.push([...elJ.slice(0, z), element, ...elJ.slice(z)])
                    let pa1 = 1

                }


                // elJ.push(element)

            }
            ans = nextAns
        }

        return ans
    }
}



const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()


nums = [2, 5, 6, 9]
target = 9
candidates = [9, 2, 2, 4, 6, 1, 5], target = 8
nums = [1, 2, 3]

console.log('::: ', sol.permute(nums));