

function doTask(data) {
    let n = Number(data[0])

    let nums = []
    for (let i = 1; i < data.length; i++) {
        const element = data[i];
        nums.push(Number(element))
    }

    let dp = Array.from({ length: nums.length + 1 }, v => Array.from({ length: nums.length + 1 }, v => Infinity))

    dp[0][0] = 0


    for (let i = 0; i < dp.length - 1; i++) {
        const curDp = dp[i];
        if (i == 3) {
            let chehe = 1
        }

        let curVal = nums[i]
        for (let j = 0; j < curDp.length - 1; j++) {
            if (i == 3 && j == 1) {
                let chehe = 1
            }
            const IJel = curDp[j];
            if (IJel == Infinity) {
                break
            }

            // что можем:
            // можем купить обед, если обед >=100 то дается купон
            // можем использовать купон если они есть

            if (curVal > 100) {
                // dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j])

                let wasVal = dp[i + 1][j + 1]
                let newVal = dp[i][j] + curVal

                dp[i + 1][j + 1] = Math.min(wasVal, newVal)

            }

            let wasVal = dp[i + 1][j]
            let newVal = dp[i][j] + curVal

            dp[i + 1][j] = Math.min(wasVal, newVal)

            if (j > 0) {
                let wasVal = dp[i + 1][j - 1]
                let newVal = dp[i][j]

                dp[i + 1][j - 1] = Math.min(wasVal, newVal)
            }

        }

    }

    let ansMin = Infinity
    for (let i = 0; i < dp[dp.length - 1].length; i++) {
        const element = dp[dp.length - 1][i];
        ansMin = Math.min(ansMin, element)
    }
    nums
    return ansMin
}

// todo прочесть заново код

let testStr1

testStr1 = `5
35
40
101
59
63`


// testStr1 = `2
// 100
// 98
// 99
// `


// testStr1 = `2`

// testStr1 = `4
// 2
// 100
// 0
// 0`

// testStr1 = `5
// 110
// 40
// 110
// 40
// 110`


// testStr1 = `3
// 111
// 5
// 111`

console.log('::: ', doTask(testStr1.split('\n')));


