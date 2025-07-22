class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        function targer_twoSum(start, end, target) {
            target = -target
            let ar_start_end = []
            while (start < end) {
                let cur = (nums[start] + nums[end])
                if (cur == target) {
                    ar_start_end.push([start, end])
                    start++
                }
                if (cur < target) {
                    start++
                }
                if (cur > target) {
                    end--
                }

            }
            if (ar_start_end.length != 0) {
                return [true, ar_start_end]
            }
            return [false, ar_start_end]

        }

        let testAr = [1, 2, 3]
        // nums=testAr
        let target = 3, start = 0, end = 2
        // targer_twoSum(a,b,start,end,target) 
        // console.log('targer_twoSum(a,b,start,end,target) ::: ', targer_twoSum(start, end, target));
        nums = nums.sort(((a, b) => a - b))

        let ans = new Set()
        for (let i = 0; i < nums.length; i++) {
            // const element = array[i];
            let target = nums[i]
            start = i + 1
            end = nums.length - 1

            let cur = targer_twoSum(start, end, target)
            if (cur[0]) {

                for (const k of cur[1]) {
                    let cur_ans = JSON.stringify([nums[i], nums[k[0]], nums[k[1]]])

                    if (!ans.has(cur_ans)) {

                        ans.add(cur_ans)
                    }
                }


                // return 
            }
        }
        ans = Array.from(ans)
        for (let i = 0; i < ans.length; i++) {
            const element = ans[i];
            ans[i] = JSON.parse(ans[i])
        }
        return ans


    }
}








// 
a = new Solution()
// 

nums = [-1, 0, 1, 2, -1, -4]
nums = [0, 0, 0, 0]

nums = [-2, 0, 1, 1, 2]


console.log('Задача ответ::: ', a.threeSum(nums));

