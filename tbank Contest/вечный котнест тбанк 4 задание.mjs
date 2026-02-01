function doTask(str1, str2) {

    function transsForntStr(str) {
        str = str.split(' ')

        str = str.filter((v) => v != '')
        str = str.map((v) => parseInt(v))
        return str
    }
    let [n, k] = transsForntStr(str1)
    let numbers = transsForntStr(str2)

    function getNums(number) {

        let strNum = number.toString()
        let numAr = []
        let dozenCount = 0

        for (let i = strNum.length - 1; i >= 0; i--) {
            const char = strNum[i];

            let curElToAdd = parseInt(char)

            numAr.push([curElToAdd, dozenCount])

            dozenCount++
        }
        return numAr

    }

    let strippedNumbers = []

    for (const num of numbers) {


        strippedNumbers = [...strippedNumbers, ...getNums(num)]

    }
    strippedNumbers.sort((a, b) => a[0] - b[0])
    strippedNumbers.sort((a, b) => b[1] - a[1])

    let ans = 0
    for (const numAr of strippedNumbers) {
        let [startNum, dozens] = numAr
        if (startNum != 9 && k != 0) {

            let curNum = startNum * (10 ** dozens)
            let perfecVal = 9 * (10 ** dozens)

            let delta = perfecVal - curNum
            ans += delta
            k--
            // debugger

        }
        if (k == 0) {
            return ans
        }
    }
    return ans
    // debugger

    // let testNum = 904

    // // getNums(number)
    // console.log('getNums(number)::: ', getNums(testNum));

    // str1 = str1.trim()
    // debugger

}

let testStr1 = '5 2'
let testStr2 = '1 2 3 1 5'

testStr1 = `3  1`
testStr2 = `99  5  85`


let data3 = `1  10
9999`

function dataToStrs(data) {

    let [testStr1, testStr2] = data.split('\n')
    return [testStr1, testStr2]
}
[testStr1, testStr2] = dataToStrs(data3)

// doTask(str1, str2)
console.log('doTask(str1, str2)::: ', doTask(testStr1, testStr2));