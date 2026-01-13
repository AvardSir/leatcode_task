let prom = new Promise((resolve, reject) => {

    if (Math.random() > 0.5) {
        resolve([1, 2, 3])
    }
    else {
        reject([3, 2, 1])
    }
}).then((data) => {
    console.log('data::: ', data);
    // x
    console.log('x::: ', x);

})
    .catch((data) => {
        console.log('data::: ', data);
    })
