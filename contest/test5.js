function sum(a, b) {
    return a + b
}

function product(a) {
    console.log('product.length::: ', product.length);

    return a * a
}

function powder(a) {
    return a ** a
}


let test = product(sum(1, 2))

function compose(...functions) {

    return (...args) => {
        let res = functions[functions.length - 1](...args)
        for (let i = functions.length - 2; i >= 0; i--) {
            const curFun = functions[i];

            res = curFun(res)

        }
        return res
    }
}

// compose(product, sum)(1, 2)
// 9**9
// console.log('9**9::: ', 9**9);

// console.log('compose(product, sum)(1, 2)::: ', compose(powder, product, sum)(1, 2, 3));


let ar = [1, 2, 3]

// ar.reduce((acc, curVal) => acc + curVal)
// console.log('ar.reduce((acc, curVal) => acc + curVal)::: ', ar.reduce((acc, curVal) => acc + curVal, 10));
// act.reduce((ac,curVal)=>ac*curVal,33)
// console.log('act.reduce((ac,curVal)=>ac*curVal,33)::: ', ar.reduce((ac, curVal) => ac * curVal, 33));

// act.reduce()



function power(a, b) {
    return a * b
}

let ar2 = [1, 2, 3]

// ar2.map((v, i) => power(v, 2))
console.log('ar2.map((v, i) => power(v, 2))::: ', ar2.map((v, i) => power(v, 2)));



async function getUrl(url) {

    let counter = 0;
    async function tryFetch(url, counter) {
        try {
            fetch(url).then((data) => {
                return data
            })

        } catch (error) {
            counter++
            if (counter != 5) {
                tryFetch(url, counter)
            }
            else {
                return new Error('eror')
            }
        }

    }

    try {
        return tryFetch(url, counter)
    } catch (error) {
        return error
    }




}