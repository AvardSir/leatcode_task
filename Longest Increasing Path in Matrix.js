class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {


        let [count, UPAr, DownAr] = [0, [], []]
        let testEl = [count, UPAr, DownAr]

        let dp = Array.from({ length: matrix.length }, v => Array.from({ length: matrix.length }, v => testEl))
        // эл= 
        // // [count, UPAr,DownAr]

        // [UPAr,DownAr]
        // UPAr=[countMaxUp,ArUp]  //ArUp=[ [i,j], [i,j] ]
        // DownAr=[countMaxDown,ArDown]



        function linkA_B(a, b) {

            // a это то наш Основной элемент 
            // b это элемент который мы чекаем 

            let [iA, jA] = a

            let aEl = matrix[iA][jA]


            let [iB, jB] = b

            let bEl = matrix[iB][jB]

            // , jA

            // dpA
            let [count_A, UPAr_A, DownAr_A] = dp[iA][jA]

            // dpB
            let [count_B, UPAr_B, DownAr_B] = dp[iB][jB]
            if (aEl < bEl) {
                // чекаем b up 

                let [curI, curJ] = [iB, jB]
                while (true) {
                    // идем вверх обновляя низ

                    let [count_Cur, UPAr_Cur, DownAr_Cur] = dp[curI][curJ]
                    // TODO: чт ос ним? 

                    if (UPAr_Cur.length == 0) {


                    }
                }

                // обновляем то что меньше a

                //  нужно ли обновлять прям каждый узел после добавления?
                // вроде да
            }
            else if (aEl > bEl) {

            }



        }

        function checkIJ(i, j) {
            // право 
            if (j < matrix[0].length - 1) {
                // j + 1 ok

                let a = [i, j]

                let b = [i, j + 1]
                linkA_B(a, b)

            }
            // низ 
            if (i < matrix.length - 1) {
                // i+1 ok
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            // const element = matrix[i];

            for (let j = 0; j < matrix[i].length; j++) {
                // const number = matrix[i][j];

                checkIJ(i, j)
            }

        }


    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

matrix = [[5, 5, 3], [2, 3, 6], [1, 1, 1]]



// console.log('::: ', sol.longestIncreasingPath(matrix)); 