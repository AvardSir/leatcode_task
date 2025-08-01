class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length == 1) {
            return 0

        }
        let stack = [[temperatures[0], 0]]
        let ans = [...temperatures].fill(0)
        for (let i = 1; i < temperatures.length; i++) {
            // const element = temperatures[i];
            // console.log('stack[stack.length - 1][0]::: ', stack[stack.length - 1][0]);
            console.log('stack[stack.length - 1][0]::: ', stack[stack.length - 1][0]);
            if (temperatures[i] > stack[stack.length - 1][0]) {
                

                for (let j = stack.length - 1; j >= 0; j--) {
                    // const element = stack[j];
                    if (stack[j][0] < temperatures[i]) {
                        ans[stack[j][1]] = i - stack[j][1]
                        stack.pop()

                    }
                    else {
                        
                        break
                    }
                    // stack.push(temperatures[i])

                }
            }
            
            stack.push([temperatures[i],i])
        }

        return ans
    }
}



// оно работате
a = new Solution()
// 

temperatures = [30, 38, 30, 36, 35, 40, 28]
temperatures = [30, 38, 30, 36, 35, 40, 28]
temperatures = [30, 40, 50, 60]

console.log('a.productExceptSelf(tescae1)::: ', a.dailyTemperatures(temperatures));

