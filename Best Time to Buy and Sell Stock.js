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
        let max = height[0], max_idx = 0
        for (let i = 1; i < height.length; i++) {
            const element = height[i];
            if (max < height[i]) {
                max = height[i]
                max_idx = i
            }

        }
        let height_reverse = height.slice(max_idx , height.length)
        for (let i = 0; i < height_reverse.length; i++) {
            const element = height_reverse[i];
            height_reverse[i] = height[height.length - 1 - i]

        }


        let total_water = 0
        let cur_water=0
        while (l <= max_idx) {

            if (height[l] > height[r]) {
                cur_water = height[l] - height[r]
                // стартуем 3 1 2 или 2 1 3 ну короч ищем выбоину
                r++
                while (r <= max_idx) {

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
        // total_water += cur_water
        cur_water=0
        l = r
        r++


        l = 0
        r = 1
        while (l < height_reverse.length ) {

            if (height_reverse[l] > height_reverse[r]) {
                let cur_water = height_reverse[l] - height_reverse[r]
                // стартуем 3 1 2 или 2 1 3 ну короч ищем выбоину
                r++
                while (r < height_reverse.length ) {

                    if (height_reverse[l] <= height_reverse[r]) {

                        // r конец нашла правый конец выбоины.
                        total_water += cur_water
                        l = r
                        r++
                        cur_water=0
                        break
                    }
                    cur_water += height_reverse[l] - height_reverse[r]
                    r++


                }
            }
            else {
                // 1 2 или 1 3 
                l++
                r++
            }
        }
        // total_water += cur_water

        // справо налево
        return total_water
    }
}







// 
a = new Solution()
// 

height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
height = [4,2,0,3,2,5]
height=[0,2,0,3,1,0,1,3,2,1]

height=[6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]


console.log('Задача ответ::: ', a.trap(height));

