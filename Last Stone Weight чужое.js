class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxStone = -Infinity
        for (let i = 0; i < stones.length; i++) {
            const element = stones[i];
            maxStone = Math.max(maxStone, element)

        }

        // сделали max
        // что дальше 
        let stonesCount = Array(maxStone + 1).fill(0)
        for (let i = 0; i < stones.length; i++) {
            const element = stones[i];
            stonesCount[element]++

        }


        let first = maxStone, second = maxStone
        while (first > 0) {

            if (stonesCount[first] % 2 == 0) {
                // четное
                first--
                continue
            }

            let j = first - 1
            while (true) {
                if (j < 1) {
                    return first
                }
                // TODO: тут дальше
                if (stonesCount[j] != 0) {
                    second = j
                    break
                }

                j--

            }
            let dif = first - second
            stonesCount[first]--
            stonesCount[second]--

            stonesCount[dif]++

            first = Math.max(dif, second)
            // ищем second

        }
        return 0

        let pas = 1
    }
}


let a = new Solution()
stones = [2, 3, 6, 2, 4]
stones = [2, 3, 6, 2, 4]

// a.lastStoneWeight(stones)
console.log('a.lastStoneWeight(stones)::: ', a.lastStoneWeight(stones));