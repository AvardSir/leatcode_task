class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        // када посетим клетку то значение делаем=inf
        // дийктрой прохходим масив и ждем када найдем левый правый угол

        let startI = 0
        let startJ = 0

        let endI = grid.length - 1
        let endJ = grid[0].length - 1

        let minH = new MinPriorityQueue(v => v[1])

        minH.push([[0, 0], grid[startI][startJ]])

        let maxHeight = -Infinity
        let isFind = false
        function adIJ(i, j) {
            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == Infinity) {
                return
            }
            let curGridVal = grid[i][j]
            // grid[i][j] = Infinity
            minH.push([[i, j], curGridVal])
        }

        let maxVal = -Infinity
        while (minH.size()) {
            let curEl = minH.pop()
            let [i, j] = curEl[0]
            let curGridVal = grid[i][j]
            if (grid[i][j] == Infinity) {
                continue
            }
            maxVal = Math.max(maxVal, curGridVal)
            if (maxVal==8) {
                let chhek=1
            }
            if (i == endJ && j == endJ) {
                return maxVal
            }
            grid[i][j] = Infinity
            adIJ(i + 1, j)
            adIJ(i, j + 1)
            adIJ(i - 1, j)
            adIJ(i, j - 1)
        }

        return maxVal
    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

grid = [
    [0, 1, 2, 10],
    [9, 14, 4, 13],
    [12, 3, 8, 15],
    [11, 5, 7, 6]
]

console.log(' ::: ', sol.swimInWater(grid));