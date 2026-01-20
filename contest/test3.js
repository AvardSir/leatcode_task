function sum(a, b) {
    return a + b
}
function carungSum() {
    let c = 3
    return function sum(a, b) {
        return a + b + c
    }
}

function sumAl(...a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        sum += element
    }
    return sum
}
// sumAl(1,2,3,5)
console.log('sumAl(1,2,3,5)::: ', carungSum()(1, 4, 3, 5));


// carungSum()(1,2)

// console.log('carungSum()(1,2)::: ', carungSum()(1, 2));