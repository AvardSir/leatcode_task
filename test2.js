function creaIArr(arr, i) {
    return [...arr.slice(0, i), ...arr.slice(i + 1)]
}

let arr = [1, 2, 3, 4]
let test = arr.join('')
let htht=1
let i = 2

let newAr = creaIArr(arr, 0)
newAr.push(33)

let htht2 = 1

// let nextArr = (arr.slice(0, i) + arr.slice(i + 1))
let nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)]

// for (let i = 0; i < nextArr.length; i++) {
//     const element = nextArr[i];
//     nextArr[i] = Number(element)

// }
console.log('nextArr::: ', nextArr);