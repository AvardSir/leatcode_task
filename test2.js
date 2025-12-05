dp = [1, 2, 3, 5, 6]
// dp = [1, 6]
// dp = [1, 2, 3, 8]
// dp = [3, 4, 5]

let el = 2


function binarySerch(el) {
    if (el < dp[0]) {
        dp[0] = el
        return
    }
    if (dp.length > 1 && dp[dp.length - 2] <= el && el <= dp[dp.length - 1]) {
        dp[dp.length - 1] = el
        return
    }
    let l = 0, r = dp.length - 1
    let mid = 0

    function findMid(r, l) {
        return Math.ceil((r - l) / 2)
    }

    while (l + 1 < r) {
        mid = l + findMid(r, l)
        let midEl = dp[mid]

        if (el < midEl) {
            // l = mid
            r = mid
            // тут
            // dp[mid] = el
            // break
        }

        else {
            l = mid
            // r = mid
        }



    }
    if (dp[l] == el || dp[r] == el) {
        return
    }
    mid = l + findMid(r, l)
    dp[mid] = el

}

// оформи как функцию
// dp
console.log('el::: ', el);

console.log('dp::: ', dp);

binarySerch(el)
console.log('dp::: ', dp);