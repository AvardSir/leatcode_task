class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let memo = Array.from({ length: board.length }, v => Array.from({ length: board[0].length }, v => 0))
        let isFin = false
        function dfs(i, j, z) {
            if (isFin) {
                return
            }
            if (board[i] == 1) {
                let wat = 1
            }
            if (i < 0 || j < 0 || i > board.length-1 || j > board[0].length-1 || memo[i][j] == '-' || board[i][j] != word[z]) {
                return
            }


            memo[i][j] = '-'
            z++
            if (z == word.length) {
                isFin = true
                return
            }
            dfs(i + 1, j, z)
            dfs(i, j + 1, z)
            dfs(i - 1, j, z)
            dfs(i, j - 1, z)
            memo[i][j] = 0

        }
        let pas = 1
        for (let i = 0; i < board.length; i++) {
            // const element = board[i];
            for (let j = 0; j < board[0].length; j++) {

                const element = board[i][j];
                dfs(i, j, 0)
                if (isFin) {
                    return true
                }



            }

        }

        return isFin
    }
}


// subsetsWithDup(nums)

let sol = new Solution()

nums = [1, 2, 1]

// board = [
//     ["A", "B", "C", "D"],
//     ["S", "A", "A", "T"],
//     ["A", "C", "A", "E"]
// ]
// word = "CAT"


// board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]]
// word = "ABCCED"

board = [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"]]

// путь правильный почемуто не видит ПРОВЕРИТЬ
//  1 2 3 4 
// 10 9 8 5
//      7 6 
word = "ABCESEEEFS"


board = [["A", "B", "C", "D"], ["S", "A", "A", "T"], ["A", "C", "A", "E"]]
word = "BAT"

board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
word = "ABCCED"
console.log(' ::: ', sol.exist(board, word));