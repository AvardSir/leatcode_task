class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1

        let h1 = heights[0] > heights[1] ? heights[1] : heights[0]
        let max = h1
        while (r > l) {

            if (heights[l] >= heights[r]) {
                let cur = heights[r] * (r - l)
                max = max < cur ? cur : max

                r--
            }
            else {
                let cur = heights[l] * (r - l)
                max = max < cur ? cur : max

                l++
            }

        }

        return max
    }
}








// 
a = new Solution()
// 

height = [1, 7, 2, 5, 4, 7, 3, 6]



console.log('Задача ответ::: ', a.maxArea(heights));

