/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 * 
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */

function createCounter(init) {
    function done(init) {
        this.init = init
        this.count = init
        // return {this.init : init}
        // Ваше решение
    };
    done.prototype.increment = function increment() {
        this.count++
        return this.count
    }
    done.prototype.reset = function reset() {
        this.count = this.init
        return this.count
    }
    done.prototype.decrement = function decrement() {
        this.count--
        return this.count
    }
    return new done(init)
}



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
