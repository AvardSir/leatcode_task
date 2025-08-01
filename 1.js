class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // проверка 1й строки 
        function ches_arr(arr) {
            let count_aper = Array.from({ length: 10 }, x => 0)
            // ["1", "2", ".", ".", "3", ".", ".", ".", "."]
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (arr[i] != '.') {
                    arr[i] = parseInt(arr[i])
                    if (count_aper[arr[i]] != 0) {
                        return false
                    }
                    else {
                        count_aper[arr[i]]++
                    }
                }
            }
            return true
        }
        // ches_arr(["1", "2", "1", ".", "3", ".", ".", ".", "."])
        // console.log('ches_arr ', ches_arr(["1", "2", "5", ".", "3", ".", ".", ".", "."]));
        // провека строк
        for (const i of board) {
            if (!ches_arr(i)) {
                return false
            }
        }
        // проверка столбцов
        //транспонирование руками
        let trans_arr = Array.from({ length: board.length }, x => [])
        for (let i = 0; i < board.length; i++) {
            const element = board[i];
            for (let j = 0; j < board[i].length; j++) {
                const element = board[j];
                let checkEl = board[j][i]
                trans_arr[i].push(checkEl)

            }

        }
        // использолвание транспонирования
        for (const i of trans_arr) {
            if (!ches_arr(i)) {
                return false
            }
        }

        // транспонирование библиотекой
        let trans_board = board.map((_, indx) => board.map(row => row[indx]))
        // превратить 3х3 в строку
        board
        let teeest = board.length / 3

        let arr_str = []
        let temp = []
        let i_diap = 0
        let j_diap = 0
        let i_start = 0
        let i_end = 0 + 3

        let j_start = 0
        let j_end = 0 + 3
        for (let i = 0; i < 3; i++) {
            // i_diap = [i, i + 3]

            i = i * 3
            i_start = i
            i_end = i + 3
            for (let j = 0; j < 3; j++) {
                // j_diap = [j, j * 3]
                j = j * 3
                j_start = j
                j_end = j + 3
                for (let i2 = i_start; i2 < i_end; i2++) {
                    for (let j2 = j_start; j2 < j_end; j2++) {
                        temp.push(board[i2][j2])
                    }

                }
                arr_str.push(temp)
                temp = []
                // temp = [...temp, board[j].slice(i, i + 3)]

            }

        }
        // стандартная проверка масива на вшивость
        for (const i of arr_str) {
            if (!ches_arr(i)) {
                return false
            }
        }
        pas = 12
    }
}


a = new Solution()

board =
    [["1", "2", "3", "10", "11", "12", ".", ".", "."],
    ["4", "5", "6", "13", "14", "15", ".", ".", "."],
    ["7", "8", "9", "16", "17", "18", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: true
// console.log('::: ', );
// // console.log('::: ', );
// console.log('::: ', );
// Output: true
// Output: true
// 

board =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log('a.productExceptSelf(tescae1)::: ', a.isValidSudoku(board));

