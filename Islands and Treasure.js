class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if (!grid) {
            return grid
        }
        if (grid.length == 0 || grid[0].length == 0) {
            return grid
        }

        // maxStack 
        // зайди пройдись прочекай
        function dfs(i, j) {

            // TODO: проблема что надо бы еще раз пройтись по infinity но как бы как?
            // что делать если там не будет суши? 
            // может сделать isLand? мбмб
            // после него всего 

            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == -1 || grid[i][j] == Infinity) {
                return Infinity
                // return -2? типо что мы не нашли ничо лучше но вместе с этим прошли 
            }
            if (grid[i][j] == 0) {
                return 0
            }
            if (grid[i][j] != 2147483647) {
                return grid[i][j]
            }

            grid[i][j] = Infinity

            let up = dfs(i + 1, j) + 1
            let down = dfs(i - 1, j) + 1
            let right = dfs(i, j + 1) + 1
            let left = dfs(i, j - 1) + 1
            if (i == 1 && j == 2) {
                let check = 1
            }
            let curDist = Math.min(up, down, right, left)

            grid[i][j] = curDist
            // (up != Infinity || down != Infinity || right != Infinity || left != Infinity)
            if (curDist != Infinity) {

                if (up == Infinity) {
                    grid[i + 1][j] = 2147483647
                    up = dfs(i + 1, j) + 1
                }

                if (down == Infinity) {
                    let curI = i + 1
                    let curJ = j
                    grid[curI][curJ] = curDist + 1
                    // TODO: крч
                    // я думаю надо возвращать не нужно возвращать infifnity если -1
                    down = dfs(i - 1, j) + 1
                }
                if (right == Infinity) {
                    right = dfs(i, j + 1) + 1
                }
                if (up == Infinity) {
                    left = dfs(i, j - 1) + 1
                }

            }
            // curDist = Math.min(up, down, right, left)

            // let curDist = Math.min(dfs(i + 1, j) + 1,
            //     dfs(i, j + 1) + 1,
            //     dfs(i - 1, j) + 1,
            //     dfs(i, j - 1) + 1)

            // let curDist
            // grid[i][j] = curDist
            return curDist

        }

        for (let i = 0; i < grid.length; i++) {
            // const element = grid[i];
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j];
                if (element == 2147483647) {
                    grid[i][j] = dfs(i, j)

                }

            }

        }
        return grid
    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
let sol = new Solution()

grid = [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]



console.log(' ::: ', sol.islandsAndTreasure(grid));