class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {

        let maxGasDivCost = -Infinity

        let index_maxGasDivCost
        let totalSum = 0
        let arVAl = []
        for (let i = 0; i < gas.length; i++) {
            const gasI = gas[i];
            let costI = cost[i]
            let value = gasI - costI
            totalSum += value
            arVAl.push(value)
            if (maxGasDivCost < value) {
                maxGasDivCost = value
                index_maxGasDivCost = i
            }

        }
        if (totalSum < 0) {
            return -1
        }
        let curSum = 0


        let indStart = 0
        let i = 0

        let j = 0
        while (true) {
            const val = arVAl[i];
            if (curSum + val < 0) {
                curSum = Math.max(0, val)
                indStart = i + 1
                j = 0
                if (indStart == arVAl.length) {
                    indStart -= arVAl.length
                }
            }
            else {
                curSum += val
            }

            i++
            j++
            if (j == arVAl.length) {
                return indStart
            }
            if (i == arVAl.length) {
                i -= arVAl.length
            }

        }

        console.log('arVAl::: ', arVAl);



        let a1 = 1
    }
}


let sol = new Solution()

gas = [1, 2, 3, 4], cost = [2, 2, 4, 1]
gas = [1, 2, 3], cost = [2, 3, 2]

console.log('::: ', sol.canCompleteCircuit(gas, cost));