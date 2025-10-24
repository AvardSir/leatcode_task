class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {

        let board = Array.from({ length: n }, v => Array.from({ length: n }, v => 0))
        // function PlusHorizontal(i) {
        //     for (let z = 0; z < board[i].length; z++) {
        //         const element = board[i][z];

        //         if (element == 'Q') {
        //             continue
        //         }
        //         board[i][z]++

        //     }

        // }
        function Horizontal(i, isPlus) {
            let plus = 1
            if (!isPlus) {
                plus = -1
            }
            for (let z = 0; z < board[i].length; z++) {
                const element = board[i][z];

                if (element == 'Q') {
                    continue
                }
                board[i][z] += plus


            }

        }
        function Vertical(j, isPlus) {
            let plus = 1
            if (!isPlus) {
                plus = -1
            }
            for (let z = 0; z < board.length; z++) {
                const element = board[z][j];
                if (element == 'Q') {
                    continue
                }

                board[z][j] += plus



            }

        }
        function diagonal(i, j, isPlus, isUpdown) {
            let plus = 1
            if (isPlus != 'plus') {
                plus = -1
            }

            let plusUpdown = 1
            if (isUpdown != 'UpDown') {
                plusUpdown = -1
            }

            let startI = i, startJ = j
            let curPos = board[i][j]

            // цикл верх
            while (i > -1 && j > -1 && i < board.length && j < board.length) {

                if (board[i][j] != 'Q') {
                    board[i][j] += plus

                }
                i--
                j -= plusUpdown
                // curPos
            }
            // цикл вниз
            [i, j] = [startI, startJ]
            while (i > -1 && j > -1 && i < board.length && j < board.length) {

                if (board[i][j] != 'Q') {
                    board[i][j] += plus

                }

                i++
                j += plusUpdown
            }

            board[startI][startJ] -= plus
        }
        board
        // board[0][1] = 'Q'
        // diagonal(1, 1, true)

        // diagonalUpDown(2, 1, true)

        // diagonal(1, 1, 'plus', 'UpDown')

        // diagonal(1, 1, 'plus', 'DonwTop')

        function QuenPosition(i, j, plus) {

            let isPlus = true
            if (plus != 'plus') {
                isPlus = false
            }
            if (isPlus) {
                diagonal(i, j, plus, 'UpDown')

                diagonal(i, j, plus, 'DonwTop')
                if (plus == '') {

                }
                Horizontal(i, isPlus)
                Vertical(j, isPlus)

                board[i][j] = 'Q'
            }
            else {
                diagonal(i, j, plus, 'UpDown')

                diagonal(i, j, plus, 'DonwTop')

                Horizontal(i, isPlus)
                Vertical(j, isPlus)

                board[i][j] = 0
            }

        }

        // board
        QuenPosition(3, 3, 'plus')
        // QuenPosition(0, 3, 'plus')
        // QuenPosition(3, 3, 'minus')
        // QuenPosition(1, 1, 'minus')
        // Horizontal(0, true)
        // Horizontal(2, true)
        // Horizontal(0, false)

        // Vertical(1, true)
        // Vertical(1, true)
        // Vertical(1, false)
        // PlusHorizontal(3)
        // PlusHorizontal(3)
        // MinusHorizontal(3)

        function ijTODigDownUp(i, j) {
            return i + j
        }
        // ijTODigDownUp(3, 0)
        console.log('::: ', ijTODigDownUp(2, 2));


        let check43 = 1
        function dfs(i, j) {
            if (board[i][j] == 'Q' && board[i][j] > 0) {
                return
            }

            // board[i][j] = 'Q'
            QuenPosition(i, j, 'plus')
            dfs(i, j)
            QuenPosition(i, j, 'minus')



            // TODO: условие выхода
            // мб подсчет свободных королев?
            // внутри dfs цикл по всем элементам ?
            // for i for j?

        }

        for (let i = 0; i < board.length; i++) {
            // const element = board[i];
            for (let j = 0; j < board[i].length; j++) {
                const element = board[i][j];


                let totalQuen = n - 1

                let places = n * n
                dfs(i, j)

            }

        }
        let check = 1
    }
}


let sol = new Solution()


n = 4

console.log(' ::: ', sol.solveNQueens(n));