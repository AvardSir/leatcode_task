class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length == 1) {
            return [0]

        }
        let max = temperatures[temperatures.length - 1]
        let inx_after_max = temperatures.length 
        let ans = Array.from({ length: temperatures.length }, _ => 0)
        for (let i = temperatures.length - 2; i >= 0; i--) {
            if (max < temperatures[i]) {
                max = temperatures[i]
                inx_after_max = i + 1
                continue
            }
            for (let j = i + 1; j < temperatures.length; j++) {
                if (inx_after_max == j) {
                    break
                }
                if (temperatures[i] < temperatures[j]) {
                    ans[i] = j - i
                    break
                }

            }

        }
        return ans
    }
}


// оно работате
a = new Solution()
// 

temperatures = [30, 38, 30, 36, 35, 40, 28]
temperatures = [30, 38, 30, 36, 35, 40, 28]
temperatures=[30,40,50,60]

console.log('a.productExceptSelf(tescae1)::: ', a.dailyTemperatures(temperatures));

