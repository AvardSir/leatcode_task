class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        // када посетим клетку то значение делаем=inf
        // дийктрой прохходим масив и ждем када найдем левый правый угол

        startI = 0
        startJ = 0

        endI = grid.length - 1
        endJ = grid[0].length - 1

        let minH = new MinPriorityQueue()

        let maxHeight = -Infinity
        let isFind = false
        function dfs(i, j) {
            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == Infinity) {
                return false
            }
            if (isFind) {
                return true
            }
            if (i == endI && j == endJ) {
                maxHeight = Math.max(maxHeight, grid[i][j])
                isFind = true
                return true
            }

            let curGridVal = grid[i][j]
            grid[i][j] = Infinity

            if (dfs(i + 1, j)) { return true }
            if (dfs(i, j + 1)) { return true }
            if (isFind) {
                return true
            }
            if (dfs(i - 1, j)) { return true }
            if (isFind) {
                return true
            }
            if (dfs(i, j - 1)) { return true }
            if (isFind) {
                return true
            }

            grid[i][j] = curGridVal
            return false

        }


        dfs(startI, startJ)

        return maxHeight
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

console.log(' ::: ', sol.findItinerary(tickets));