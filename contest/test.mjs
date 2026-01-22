async function test(prom) {
    let total = await Promise.all(prom)

    let tktk = 1
}

let prom1 = new Promise(resolve => resolve([1, 2, 3]))
let prom2 = new Promise(resolve => resolve([4, 5, 3]))
let prom3 = new Promise(resolve => resolve([7, 8, 3]))

let testId = 456


let testAr = [
    [1, prom1],
    [2, prom2],
    [3, prom3]
]

test(testAr)