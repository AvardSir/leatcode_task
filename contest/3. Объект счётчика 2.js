/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 * 
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
function createCounter(init) {

    class counter {
        constructor(init) {
            this.init = init
            this.counter = init
        }
        increment() {
            this.counter++
            return this.counter
        }
        reset() {
            this.counter = this.init
            return this.counter
        }
        decrement() {
            this.counter--
            return this.counter
        }
    }

    return new counter(init)

    // Ваше решение
};


// const counter = createCounter(5)

// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())


// const counter = createCounter(0)

// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.decrement())

const counter = createCounter(100)

console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.increment())
console.log(counter.increment())


// console.log('splitWordsBySeparator = (words, separator)::: ', splitWordsBySeparator(words, separator));
