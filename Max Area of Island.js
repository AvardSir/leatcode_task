class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let curSize
        let maxSize = 0

        function dfs(i, j) {

            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0) {
                return
            }

            grid[i][j] = 0
            curSize++
            dfs(i + 1, j)
            dfs(i, j + 1)
            dfs(i - 1, j)
            dfs(i, j - 1)
        }
        for (let i = 0; i < grid.length; i++) {
            // const element = array[i];
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j];
                if (element == 1) {
                    curSize = 0
                    dfs(i, j)
                    maxSize = Math.max(maxSize, curSize)
                }

            }
        }

        return maxSize
    }
}


let sol = new Solution()

grid = [
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1]
]


console.log(' ::: ', sol.maxAreaOfIsland(grid));