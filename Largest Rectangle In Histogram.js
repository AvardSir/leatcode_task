class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maaax = Math.max(...heights)

        let chec = Array.from({ length: heights.length }, x => Array.from({ length: maaax }, x => false))



        let z = 0

        let max_ansew = maaax
        for (let i = 0; i < heights.length; i++) {

            // x=i
            // y=heights[i]

            // случай этот столбец уже пройден когда мы ходили слева направо
            if (chec[i][heights[i]-1]) {
                continue
            }
            else {
                for (let j = heights[i]-1; j >= 0; j--) {

                    // случай: идем ниже но уже были тут когда проходи слева направо
                    if (chec[i][j]) {
                        break
                    }


                    // x=z
                    // y=j


                    z = 1
                    while (true) {

                        if (heights[i + z]-1 >= j) {
                            // можем идти правее
                            z++
                            continue
                        }
                        else {

                            // случа: дошли до права. Проверили были ли мы сверху, если да то значит не надо пересчитывать. Потому что уже сверху 
                            // посчитали
                            if (j + 1 <= chec[0].length) {

                            }
                            else {
                                if (chec[i + z][j + 1]) {
                                    chec[i + z][j] = true
                                    break
                                }
                            }


                            let treigle = z * (j+1)
                            max_ansew = max_ansew < treigle ? treigle : max_ansew



                            // сделать правее true
                            let start = i
                            let end = i + z
                            for (let k = start; k < end; k++) {
                                const element = chec[k];
                                chec[k][j] = true

                            }

                            // сделать ниже true
                            // start = 0
                            // end = heights[i]
                            // for (let k = start; k < end; k++) {
                            //     const element = chec[k];
                            //     chec[i][k] = true

                            // }

// 6й аррей в check array
                            break
                        }


                    }

                }
            }
        }
        return max_ansew


        let pas = 2
    }
}





// 
a = new Solution()
// 

heights = [7, 1, 7, 2, 2, 4]
heights=[2,1,5,6,2,3]


console.log('a.productExceptSelf(tescae1)::: ', a.largestRectangleArea(heights));

