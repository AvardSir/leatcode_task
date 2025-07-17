function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

// Пример использования
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transpose(matrix);
// console.log(transposedMatrix);
/*
[
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
*/

let ar=[1,2,3]
let ar2=ar.map(x=>x*x)

let ar3=[[1,2,3],[4,5,6],[7,8,9]]
let ar4=ar3.map((_,ind)=>ar3.map(x=>x[ind]))

let num_tes=Math.floor(7/3)
pas=1