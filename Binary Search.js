class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       
        for (let i = 0; i < matrix[0].length; i++) {
            const element = matrix[0][i];
            if (element == target) {
                return true
            }

        }
        for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
            const element = matrix[matrix.length - 1][i];
            if (element == target) {
                return true
            }

        }

        // сортировка по i
        let l = 0, r = matrix.length - 1
        let mid = l + Math.floor((r - l) / 2)
        while (l + 1 != r && l != r) {
            mid = l + Math.floor((r - l) / 2)
            if (target < matrix[mid][0]) {
                r = mid
            }
            else if (target > matrix[mid][0]) {
                l = mid
            }
            else {
                return true
            }
        }
        let mid_i = mid
        l = 0, r = matrix[mid].length - 1
        if (matrix[mid][0]==target) {
            return true
        }
        if (matrix[mid][matrix[mid].length - 1]==target) {
            return true
        }
        while (l + 1 != r && l != r) {
            mid = l + Math.floor((r - l) / 2)
            if (target < matrix[mid_i][mid]) {
                r = mid
            }
            else if (target > matrix[mid_i][mid]) {
                l = mid
            }
            else {
                return true
            }
        }
        return false
        let a = 2
        // for (let i = 0; i < matrix.length; i++) {
        //     const element = matrix[i][0];
        //     if (element < target) {

        //     }
        // }
        // сортиврока по j

    }
}





// 
a = new Solution()
// 

matrix = [[1, 2, 4, 8], [9, 9.5, 10, 12], [14, 20, 30, 40]], target = 10

matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target = 3

matrix = [[1]]
target = 0

matrix=[[1],[3]]
target=0

matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
target=20

console.log('Задача ответ::: ', a.searchMatrix(matrix, target));

