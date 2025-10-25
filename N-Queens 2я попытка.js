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
        // board
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
        // QuenPosition(3, 3, 'plus')
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
        function ijTODigUpDown(i, j) {
            // TODO: перевод i,j -> в диагональ

            let max = n
            let cur = i - j
            if (cur < 0) {
                let diag = n - 1 + Math.abs(cur)
                return diag
            }
            else {
                let diag = cur
                return diag
            }
            // return Math.abs(i - j)
        }


        // ijTODigDownUp(3, 0)
        // console.log('::: ', ijTODigDownUp(2, 2));

        // ijTODigUpDown(1, 0)
        // console.log(':::', ijTODigUpDown(0, 2));


        // Вроде диагонали верно учитывает

        let arI = Array.from({ length: n }, v => 0)
        let arJ = Array.from({ length: n }, v => 0)


        let arDowUp = Array.from({ length: n + n - 1 }, v => 0)
        let arUpDown = Array.from({ length: n + n - 1 }, v => 0)

        function placeIJ(i, j, val) {
            arI[i] = val
            arJ[j] = val
            arDowUp[ijTODigDownUp(i, j)] = val
            arUpDown[ijTODigUpDown(i, j)] = val
        }

        function checkIJ(i, j) {
            if (arI[i] == 1 ||
                arJ[j] == 1 ||
                arDowUp[ijTODigDownUp(i, j)] == 1 ||
                arUpDown[ijTODigUpDown(i, j)] == 1) {
                return false
            }
            else {
                return true
            }

        }

        // placeIJ(1, 1, 1)
        // checkIJ(1, 1)
        // console.log('checkIJ(1, 1)::: ', checkIJ(1, 1));
        // checkIJ(0, 0)
        // console.log('checkIJ(0, 0)::: ', checkIJ(0, 3));

        let check43 = 1

        function quensToStr(quens) {
            // arr=[[i,j],[i,j]]
            let emptyAr = Array.from({ length: n }, v => Array.from({ length: n }, v => '.'))


            for (let i = 0; i < quens.length; i++) {
                const element = quens[i];
                let curI = element[0]
                let curJ = element[1]
                emptyAr[curI][curJ] = 'Q'


            }

            for (let i = 0; i < emptyAr.length; i++) {
                const element = emptyAr[i];
                emptyAr[i] = emptyAr[i].join('')


            }
            return emptyAr
            let check42 = 1
        }

        // let checkQUen = [[0, 1], [2, 2]]

        // quensToStr(quens)
        // console.log('quensToStr(quens)::: ', quensToStr(checkQUen));

        let ans = []


        function dfs(z, j, totalQuen) {
            if (totalQuen == 0) {
                // let temp = quensToStr(quens)
                ans.push(quensToStr(quens))
                return
            }

            for (let j = 0; j < n; j++) {
                // z=i j=j
                // const element = array[z][j];
                if (checkIJ(z, j)) {

                    placeIJ(z, j, 1)
                    quens.push([z, j])
                    totalQuen--
                    dfs(z + 1, j, totalQuen)
                    totalQuen++
                    placeIJ(z, j, 0)
                    quens.pop()
                }
            }

            for (let i = 0; i < n; i++) {
                // const element = array[i];
                let j = 0


            }


            // QuenPosition(i, j, 'minus')



            // TODO:  2 условие выхода
            // мб подсчет свободных королев?
            // внутри dfs цикл по всем элементам ?
            // for i for j?

        }

        let totalQuen = n
        let quens = []
        // for (let i = 0; i < board.length; i++) {
        //     // const element = board[i];
        //     for (let j = 0; j < board[i].length; j++) {
        //         // const element = board[i][j];

        //         totalQuen = n
        //         quens = []
        //         dfs(i, j, totalQuen)

        //     }

        // }

        dfs(0, 0, n)
        return ans
        // dfs(0, 0)
        let check = 1
    }
}


let sol = new Solution()


n = 4

console.log(' ::: ', sol.solveNQueens(n));