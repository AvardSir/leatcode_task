class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let isOk = Array.from({ length: heights.length }, v => Array.from({ length: heights[0].length }, v => [0, 0]))



        // правый
        // TODO: проверь правильно ли обозначил на краях
        for (let i = 1; i < isOk.length; i++) {
            // const element = array[i];
            let j = isOk[0].length - 1

            let check = 1
            isOk[i][j][0] = 1
            // isOk[i][j] = [1, 0]
        }
        // низ
        for (let j = 0; j < isOk[0].length; j++) {
            // const element = isOk[0][j];
            let i = isOk.length - 1
            isOk[i][j][0] = 1
            //  isOk[i][j] = [1, 0]
        }

        // i = 0 - isOk.lengt



        // верх
        for (let j = 0; j < heights[0].length; j++) {
            // const element = heights[0][j];
            let i = 0
            isOk[i][j][1] = 1
            //isOk[0][j] =  [0, 1]
        }

        // левый

        for (let i = 0; i < isOk.length - 1; i++) {
            // const element = array[i];
            let j = 0
            isOk[0][j][1] = 1
        }

        function dfsAtlanta(i, j, prevVal) {
            if (i < 0 || j < 0 || i > heights.length - 1 || j > heights[0].length - 1) {
                return
            }
            // let chek = isOk[i][j]
            if (isOk[i][j][0] = 1) {
                return
            }
            let curVal = heights[i][j]
            if (prevVal < curVal) {
                // все ок
                // isOk
                // left=1
                isOk[i][j][0] = 1
                dfsAtlanta(i + 1, j, curVal)
                dfsAtlanta(i, j + 1, curVal)
                dfsAtlanta(i - 1, j, curVal)
                dfsAtlanta(i, j - 1, curVal)

            }
            else {
                return
            }
        }
        // правый 
        for (let i = 1; i < isOk.length; i++) {
            // const element = array[i];
            let j = isOk[0].length - 1
            // isOk[i][j] = [1, 0]

            dfsAtlanta(i, j - 1)
        }
        // низ 
        let check = 1
    }
}



class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()


heights = [
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6]
]
heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]]


console.log(' ::: ', sol.pacificAtlantic(heights));