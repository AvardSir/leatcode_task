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
        function ifIJ(i, j) {
            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == -1) {
                return false
            }
            else {
                return true
            }
        }
        // let itBe = 2147483647 + 1
        function dfs(i, j) {

            // TODO: проблема что надо бы еще раз пройтись по infinity но как бы как?
            // что делать если там не будет суши? 
            // может сделать isLand? мбмб
            // после него всего 

            if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == -1) {
                return Infinity
                // return -2? типо что мы не нашли ничо лучше но вместе с этим прошли 
            }
            if (grid[i][j] == 0) {
                return 0
            }

            if (grid[i][j] > 2147483647) {
                return 2147483647
            }
            if (grid[i][j] != 2147483647) {
                return grid[i][j]
            }

            grid[i][j] = 2147483647 + 1

            // чо делать с 2147483647 + 1
            // разрисуй

            let up = dfs(i + 1, j) + 1
            let down = dfs(i - 1, j) + 1
            let right = dfs(i, j + 1) + 1
            let left = dfs(i, j - 1) + 1

            let curDist = Math.min(up, down, right, left)

            grid[i][j] = curDist
            if (i == 0 && j == 1) {
                let check = 1
                // треш
            }
            // (up != Infinity || down != Infinity || right != Infinity || left != Infinity)
            if (curDist < 2147483647) {
                let curI
                let curJ
                if (up > 2147483647) {
                    if (ifIJ(i + 1, j)) {
                        grid[i + 1][j] = 2147483647
                        up = dfs(i + 1, j) + 1
                    }

                }
                // TODO: мы должны пересматривать расстояния или 
                // както при установлении растояния смотреть чужие растояния и менять их

                // или или просто брутфорсом
                // каждая точка- каждое сокровщие

                // вроде работает но тут треш с улосвиями
                // есть ли вариант облегчить их?

                if (down > 2147483647) {

                    curI = i - 1
                    curJ = j

                    if (ifIJ(curI, curJ)) {
                        grid[curI][curJ] = 2147483647
                        down = dfs(curJ, curJ) + 1
                    }

                }
                if (right > 2147483647) {

                    curI = i
                    curJ = j + 1

                    if (ifIJ(curI, curJ)) {
                        grid[curI][curJ] = 2147483647
                        right = dfs(curJ, curJ) + 1
                    }

                }
                if (left > 2147483647) {

                    curI = i
                    curJ = j - 1

                    if (ifIJ(curI, curJ)) {
                        grid[curI][curJ] = 2147483647
                        left = dfs(curJ, curJ) + 1
                    }
                }

            }
            curDist = Math.min(up, down, right, left, curDist)

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

grid = [[2147483647, 2147483647, 2147483647], [2147483647, -1, 2147483647], [0, 2147483647, 2147483647]]


console.log(' ::: ', sol.islandsAndTreasure(grid));