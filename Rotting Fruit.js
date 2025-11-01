class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rotenFruit = []
        let isFruit = false
        let fruitCount = 0
        for (let i = 0; i < grid.length; i++) {
            // const element = grid[i];
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j];

                if (element == 2) {
                    rotenFruit.push([i, j, 0])

                    grid[i][j] = 0
                }
                if (element == 1) {
                    isFruit = true
                    fruitCount++
                }
            }

        }
        let timeMax = 1


        function dfs(i, j, time) {
            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0) {
                return
            }
            timeMax = Math.max(timeMax, time)
            grid[i][j] = 0
            fruitCount--
            rotenFruit.push([i, j, time])
            // dfs(i + 1, j, time + 1)
            // dfs(i, j + 1, time + 1)
            // dfs(i - 1, j, time + 1)
            // dfs(i, j - 1, time + 1)
            // grid[i][j] = time




        }
        while (rotenFruit.length) {
            let element = rotenFruit.shift();

            let [i, j, time] = element
            // TODO крч проверь условие fruit++ и fruit--
            dfs(i + 1, j, time + 1)
            dfs(i, j + 1, time + 1)
            dfs(i - 1, j, time + 1)
            dfs(i, j - 1, time + 1)
        }
        let chek = 1

        if (!isFruit) {
            return 0
        }
        if (fruitCount > 0) {
            return -1
        }
        else {

            return timeMax
        }

    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
let sol = new Solution()

grid = [[1, 1, 0], [0, 1, 1], [0, 1, 2]]
grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
grid = [[1, 1, 0], [0, 1, 1], [0, 1, 2]]
grid = [[0, 2]]

grid = [[2, 1, 1], [1, 1, 1], [0, 1, 2]]

console.log(' ::: ', sol.orangesRotting(grid));