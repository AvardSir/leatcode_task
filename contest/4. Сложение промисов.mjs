/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
export const addTwoPromises = async function (promise1, promise2) {
    // let a, b

    // try {
    //     let p1 = promise1
    //     a = p1
    // } catch (error) {
    //     a = error
    // }

    // try {
    //     let p2 = promise2
    //     b = p2
    // } catch (error) {
    //     b = error
    // }

    let prom = (p) => p.then(data => data).catch(er => er)

    let [a, b] = await Promise.all([prom(promise1), prom(promise2)])


    return a + b
    // // Ваше решение
    // try {
    //     let a = await promise1

    //     let b = await promise2
    //     return a + b
    // } catch (error) {

    // }
};






// запуск
// createCounter(10);

// const counter = createCounter(5)

// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())
