class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {

        let memo = Array.from({ length: board.length }, v => Array.from({ length: board[0].length }, v => false))


        // верх
        function dfsUprove(i, j) {
            if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
                return
            }

            if (board[i][j] == 'X') {
                return
            }
            if (memo[i][j] == true) {
                return
            }
            memo[i][j] = true

            dfsUprove(i + 1, j)
            dfsUprove(i, j + 1)
            dfsUprove(i - 1, j)
            dfsUprove(i, j - 1)


        }



        let chek = 1

        // верх
        for (let j = 0; j < board[0].length; j++) {
            let i = 0

            let el = board[i][j]
            if (el == "O") {
                dfsUprove(i, j)
            }
        }
        // лево
        for (let i = 0; i < board.length; i++) {
            let j = 0

            let el = board[i][j]
            if (el == "O") {
                dfsUprove(i, j)
            }
        }
        // право
        for (let i = 0; i < board.length; i++) {
            let j = board[0].length - 1

            let el = board[i][j]
            if (el == "O") {
                dfsUprove(i, j)
            }
        }
        // низ
        for (let j = 0; j < board[0].length; j++) {
            let i = board.length - 1
            let el = board[i][j]
            if (el == "O") {
                dfsUprove(i, j)
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const element = board[i][j];
                if (element == 'O' && !memo[i][j]) {
                    board[i][j] = 'X'
                }

            }
        }

        let chek1 = 1
    }
}



class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()


board = [
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "X", "O", "X"],
    ["X", "X", "O", "O"]
]

console.log(' ::: ', sol.solve(board));