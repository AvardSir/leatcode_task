class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if (heights.length == 1) { return heights[0] }

        // инизиализация стака
        let { max, stack } = iniziz_stack()

        // фор цикл
        for_i()

        return max

        function iniziz_stack() {
            let stack = []
            let max = heights[0]

            let i = 0
            let heighy = heights[0]
            let stack_el = [heighy, i]

            stack.push(stack_el)
            return { max, stack }
        }

        function for_i() {
            for (let i = 1; i < heights.length; i++) {
               
                if (heights[i] > stack[stack.length - 1]) {
                    stack.push(h)
                }
                else {
                    for_j(stack.length - 1, i, h)

                }
            }
        }

        function for_j(stack_len, i, h) {
            for (let j = stack_len; j >= 0; j--) {
                // пересчет
                // iй элемент < jго в стаке
                if (heights[i] < stack[j]) {
                    let last_el = stack.pop()
                    let last_el_start = last_el[1]
                    lengt_el = i - last_el_start
                    heigh = h
                    let S = h * lengt_el
                    max = max < S ? S : max
                }
                else {
                    break
                }
            }

        }
    }
}






// 
a = new Solution()
// 

heights = [7, 1, 7, 2, 2, 4]
heights = [2, 1, 5, 6, 2, 3]


console.log('a.productExceptSelf(tescae1)::: ', a.largestRectangleArea(heights));

