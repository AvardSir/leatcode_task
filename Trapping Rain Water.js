class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = 1

        // for (let i = 0; i < height.length; i++) {
        //     const element = height[i];
        //     if (height[i] !=) {

        //     }
        // }
        let max=Math.max(...height)
        
        let total_water = 0
        while (l < height.length) {

            if (height[l] > height[r]) {
                let cur_water = height[l] - height[r]
                // стартуем 3 1 2 или 2 1 3 ну короч ищем выбоину
                r++
                while (r < height.length) {

                    if (height[l] <= height[r]) {

                        // r конец нашла правый конец выбоины.
                        total_water += cur_water
                        l = r
                        r++
                        break
                    }
                    cur_water += height[l] - height[r]
                    r++


                }
            }
            else {
                // 1 2 или 1 3 
                l++
                r++
            }
        }

        return total_water
    }
}







// 
a = new Solution()
// 

height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]



console.log('Задача ответ::: ', a.trap(height));

