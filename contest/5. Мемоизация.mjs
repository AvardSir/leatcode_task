export function memoize(fn) {
    // Ваше решение

    let memo = new Map()

    return function innerFunc(...args) {
        let seriluzeArgs = JSON.stringify(args)

        if (memo.has(seriluzeArgs)) {
            console.log('doneSerialzide::: ', 1);
            return memo.get(seriluzeArgs)
        }

        let res = fn(...args)

        memo.set(seriluzeArgs, res)
        console.log('doneComputer::: ', 2);

        return res

    }

}







// запуск
// createCounter(10);

// const counter = createCounter(5)

// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())

export function fn(a, b) {
    return a + b;
}

export const callingArguments = [
    [1, 2],
    [1, 2]
];

let fnMem = memoize(fn)

for (const args of callingArguments) {
    fnMem(args)
}