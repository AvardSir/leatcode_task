function doTask(data) {
    data = data.map((v) => v.split(' '))
    data = data.map((V) => V.filter((v) => v != ''))
    data = data.map((V) => V.map((v) => parseInt(v)))

    let n = data[0]
    let heights = data[1]


    function isEven(n) {
        return n % 2 == 0
    }

    let wrongEven = undefined
    let wrongOdd = undefined

    let notCorrect = `-1 -1`

    if (heights.length < 2) {
        return notCorrect
    }
    for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        if (!isEven(i + 1)) {
            if (isEven(h)) {
                if (wrongEven != undefined) {
                    return notCorrect
                }
                else {
                    wrongEven = i
                }

            }
        }
        else {
            if (!isEven(h)) {
                if (wrongOdd != undefined) {
                    return notCorrect
                }
                else {
                    wrongOdd = i
                }
            }
        }
    }


    if (wrongEven == undefined || wrongOdd == undefined) {
        return notCorrect
    }
    let ans = [wrongEven, wrongOdd]
    ans = ans.map((v) => v + 1)
    ans = ans.join(' ')
    return ans
}

let testData1 = `4
2  1  4  6`

testData1 = `2
2  1`

// testData1=`2
// 1  2`

testData1 = `2
4 2 4`

function converDataTostrs(data) {
    data = data.split('\n')
    return data
}
testData1 = converDataTostrs(testData1)
console.log('::: ', doTask(testData1));
