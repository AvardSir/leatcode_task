class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let memo = Array.from({ length: grid.length }, v => Array.from({ length: grid[0].length }, v => false))

        for (let i = 0; i < grid.length; i++) {
            // const element = array[i];
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j];
                grid[i][j] = Number(grid[i][j])

            }

        }
        let check1 = 1

        function dfs(i, j) {
            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0 || memo[i][j] == true) {
                return
            }
            memo[i][j] = 1
            dfs(i + 1, j)
            dfs(i, j + 1)
            dfs(i - 1, j)
            dfs(i, j - 1)
            // memo[i][j] = 0

        }

        let ans = 0
        for (let i = 0; i < grid.length; i++) {
            // const element = array[i];
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j];

                if (!memo[i][j] && grid[i][j] == 1) {
                    ans++
                    dfs(i, j)
                }

            }

        }
        return ans
    }
}


let sol = new Solution()

grid = [
    ["0", "1", "1", "1", "0"],
    ["0", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

console.log(' ::: ', sol.numIslands(grid));