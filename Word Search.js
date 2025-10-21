class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {


        let memo = Array.from({ length: board[0].length }, v => (Array.from({ length: board.length }, v => false)))

        let isFind = false
        function dfs(i, j, z, memo) {
            // memo = JSON.parse(JSON.stringify(memo))
            if (isFind) {
                return
            }
            if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
                return
            }

            let charWord = word[z]
            let charBord = board[i][j]
            if (word[z] != board[i][j]) {
                // console.log('word[z]::: ', word[z]);
                return
            }
            if (memo[i][j]) {
                return
            }

            // let test = [
            //     [true, true, true, false],
            //     [false, false, false, false],
            //     [false, false, false, false]]

            if (charBord == 'E') {
                let otk = 1
            }
            z++
            if (z == word.length) {
                isFind = true
            }
            if (i == 2 && j == 2) {
                let cheack21 = 3
            }
            memo[i][j] = true

            if (i == 0 && j == 2) {
                let cheack21 = 3
            }
            dfs(i, j + 1, z, JSON.parse(JSON.stringify(memo)))

            dfs(i + 1, j, z, JSON.parse(JSON.stringify(memo)))
            if (i == 0 && j == 2) {
                let cheack21 = 3
            }

            dfs(i - 1, j, z, JSON.parse(JSON.stringify(memo)))
            dfs(i, j - 1, z, JSON.parse(JSON.stringify(memo)))

        }

        for (let i = 0; i < board.length; i++) {
            // const element = array[i];

            for (let j = 0; j < board[0].length; j++) {
                const element = board[i][j];
                memo = Array.from({ length: board.length }, v => (Array.from({ length: board[0].length }, v => false)))

                dfs(i, j, 0, [...memo])
            }

        }

        return isFind
        let check = 1
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

console.log(' ::: ', sol.exist(board, word));