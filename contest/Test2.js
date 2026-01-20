

// function resturnSum(...args) {
//   function sum(a, b) {
//     return a + b
//   }
//   return sum(...args)
// }
// // resturnSum()(a, b)
// console.log('resturnSum()(a, b)::: ', resturnSum()(1, 2));

// // function calBack(func)(a, b) {

// // }


// Универсальная функция для каррирования любой функции
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  }
}

// Пример использования
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6