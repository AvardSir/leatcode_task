class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        if (amount == 0) {
            return 1
        }
        let dp = Array.from({ length: amount + 1 }, v => [])

        function mapToStr(map) {

            let mapAr = Array.from(map)

            mapAr.sort((a, b) => a[0] - b[0])

            let totalStr = ''
            for (let i = 0; i < mapAr.length; i++) {
                const element = mapAr[i];

                let num = element[0]
                let count = element[1]

                totalStr += `-${num}-${count}`
                // ?

            }

            return totalStr
            let cheh = 1

            // 
        }

        coins.sort((a, b) => a - b)

        let lastCount = 0

        for (let i = 1; i < dp.length; i++) {
            const num = i;
            let curCount = 0
            let coinSet = new Set()
            if (i == 3) {
                let thche = 1
            }

            for (let j = 0; j < coins.length; j++) {

                let mapThisNum = new Map()
                const coin = coins[j];
                let dpInd = num - coin

                if (dpInd < 0) {
                    break
                }
                if (dpInd == 0) {
                    // ок +1 count? 
                    curCount++
                    mapThisNum.set(coin, 1)
                    dp[i].push(mapThisNum)

                    break
                }

                let dpAfterMinus = dp[dpInd] //ar[map,map,map]

                for (let z = 0; z < dpAfterMinus.length; z++) {
                    const curMap = dpAfterMinus[z];
                    let copyMap = new Map(curMap)
                    if (!copyMap.has(coin)) {

                        copyMap.set(coin, 1)


                    }
                    else {
                        // let copyMap = new Map(curMap)
                        copyMap.set(coin, copyMap.get(coin) + 1)
                        // let strMap = mapToStr(copyMap)
                        // if (!coinSet.has(strMap)) {
                        //     coinSet.add(strMap)
                        //     dp[i].push(copyMap)
                        //     curCount++
                        // }
                    }
                    let strMap = mapToStr(copyMap)
                    if (!coinSet.has(strMap)) {
                        coinSet.add(strMap)
                        dp[i].push(copyMap)
                        // curCount++
                    }

                }

            }

            // lastCount = curCount
        }

        return dp[dp.length - 1].length
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

amount = 4, coins = [1, 2, 3]

amount = 0
coins = [7]

amount = 500
coins = [1, 2, 5]


console.log('::: ', sol.change(amount, coins)); 