export function createCounter(init) {
    let counter = init
    return {
        increment() {
            counter++
            return counter
        },
        reset() {
            counter = init
            return counter
        },
        decrement() {
            counter--
            return counter
        },

    }
}


// запуск
// createCounter(10);

const counter = createCounter(5)

console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
