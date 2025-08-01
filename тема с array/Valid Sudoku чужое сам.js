class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // вау я сам решил прям ваууу
    isValidSudoku(board) {
        //  row=new Array(9).fill(false)
        let row = Array.from({ length: 9 }, x => Array.from({ length: 9 }, x => false))
        let colum = Array.from({ length: 9 }, x => Array.from({ length: 9 }, x => false))
        let third_third = Array.from({ length: 3 }, x => Array.from({ length: 3 }, x => Array.from({ length: 9 }, x => false)))
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {

                if (board[i][j] == '.') {
                    continue
                }
                const el = parseInt(board[i][j])

                // проверка строки
                if (row[i][el]) {
                    return false
                }
                else {
                    row[i][el] = true
                }

                // проверка столбца
                if (colum[j][el]) {
                    return false
                }
                else {
                    colum[j][el] = true
                }

                // проверка ячеек 3х3
                let i_third = Math.floor(i / 3)
                let j_third = Math.floor(j / 3)
                if (third_third[i_third][j_third][el]) {
                    return false
                }
                else {
                    third_third[i_third][j_third][el] = true
                }
            }

        }

        return true
    }
}



a = new Solution()

board =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
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

// board =
//     [["1", "2", ".", ".", "3", ".", ".", ".", "."],
//     ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", "9", "1", ".", ".", ".", ".", ".", "3"],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", ".", "2", ".", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log('a.productExceptSelf(tescae1)::: ', a.isValidSudoku(board));

