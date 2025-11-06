edgesall = [[16, 25], [7, 9], [3, 24], [10, 20], [15, 24], [2, 8], [19, 21], [2, 15], [13, 20], [5, 21], [7, 11], [6, 23], [7, 16], [1, 8], [17, 20], [4, 19], [11, 22], [5, 11], [1, 16], [14, 20], [1, 4]]

edgesPath = [[7, 16],
[7, 11],
[5, 11],
[5, 21],
[19, 21],
[4, 19],
[1, 16]
    ,
[1, 4]]

function egrToset(ege) {
    let setedg = new Set()
    for (let i = 0; i < ege.length; i++) {
        let element = ege[i];
        element = JSON.stringify(element)
        setedg.add(element)

    }
    return setedg
}

let setEge = egrToset(edgesPath)

function arToStr(ar) {
    for (let i = 0; i < ar.length; i++) {
        let element = ar[i];

        ar[i] = JSON.stringify(ar[i])

    }
    return ar
}

let strEge = arToStr(edgesall)
let filtEdg = strEge.filter((v, i) => !setEge.has(v))

function strArToArr(ar) {
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];

        ar[i] = JSON.parse(ar[i])

    }
    return ar
}

let BackArr = strArToArr(filtEdg)
console.log('BackArr::: ', BackArr);


let totalAr = [
    [16, 25], [7, 9],
    [3, 24], [10, 20],
    [15, 24], [2, 8],
    [2, 15], [13, 20],
    [6, 23], [1, 8],
    [17, 20], [11, 22],
    [14, 20]
]
let chehk = 1