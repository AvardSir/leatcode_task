class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let mp = new Map()
        // key=>[count, start, end]
        for (let i = 0; i < S.length; i++) {
            const element = S[i];
            if (!mp.has(element)) {

                mp.set(element, [1, i, i])
            }
            else {
                let [count, start, end] = mp.get(element)
                count++
                end = i
                mp.set(element, [count, start, end])
            }

        }

        let arFromMp = Array.from(mp)

        let itWas = new Set()

        let ans = []
        for (let i = 0; i < arFromMp.length; i++) {
            const element = arFromMp[i][0];
            if (itWas.has(element)) {
                continue
            }
            let [count, start, end] = mp.get(element)


            itWas.add(element)
            // start,end цикла? i, 
            let j = start
            let jmax = end

            let finStart = start
            let finEnd = end
            while (true) {
                // S[j]
                if (!itWas.has(S[j])) {
                    [count, start, end] = mp.get(S[j])
                    // finStart = Math.min(finStart, start)
                    if (finStart > start) {
                        j = start
                        finStart = start
                    }
                    finEnd = Math.max(finEnd, end)
                    itWas.add(S[j])
                }
                if (finEnd == j) {
                    break
                }
                j++

            }

            let curLen = finEnd - finStart + 1
            ans.push(curLen)
        }

        return ans
        let pas
    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()
s = "xyxxyzbzbbisl"


console.log('::: ', sol.partitionLabels(s));