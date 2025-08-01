class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if (heights.length == 1) {
            return heights[0]

        }
        heights.push(-Infinity)
        let max = heights[0]
        let stack = []
        stack.push([heights[0], 0])

        // цикл слева направо
        for (let i = 1; i < heights.length; i++) {

            if (heights[i] >= stack[stack.length - 1]) {
                // поиск левой части
                stack.push([heights[i], i])

            }
            else {
                // если значени меньше (было 3, а теперь 2



                // 1 начало heights[i]
                // поиск начала для нового элемента в stack
                let [h,ind]=start_index_with_2_to_1(i);


                // 2 конец последнего элемента стека
                // это подсчет площади

                for (let j = stack.length - 1; j >= 0; j--) {
                    // const element = stack[j];
                    if (stack[j][0] > heights[i]) {
                        let start_len = stack[j][1]
                        let end_len = i
                        let len = end_len - start_len

                        let S = stack[j][0] * len
                        max = max < S ? S : max
                        stack.pop()
                    }
                }

                stack.push([h,ind])
            }


        }

        function start_index_with_2_to_1(i) {

            for (let j = i - 1; j >= 0; j--) {
                if (heights[j] >= heights[i]) {
                    continue;
                }
                else {
                    // то мы нашли начало heights[i]
                    // stack.push([heights[i], j + 1]);
                    return [heights[i], j + 1];
                }
            }
            // stack.push([heights[i], 0]);
            return [heights[i], 0]
        }
        return max
    }
}






// 
a = new Solution()
// 

heights = [7, 1, 7, 2, 2, 4]
// heights = [2, 1, 5, 6, 2, 3]


console.log('a.productExceptSelf(tescae1)::: ', a.largestRectangleArea(heights));

