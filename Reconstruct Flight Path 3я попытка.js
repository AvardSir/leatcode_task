class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        tickets.sort()
        let fromTO = new Map()
        for (let i = 0; i < tickets.length; i++) {
            const element = tickets[i];
            let fromI = element[0]
            let toI = element[1]
            fromTO.set(fromI, [])

        }
        for (let i = 0; i < tickets.length; i++) {
            const element = tickets[i];
            let fromI = element[0]
            let toI = element[1]

            let curAr = fromTO.get(fromI)
            curAr.push(toI)
            // fromTO.set(fromI, [])

        }
        let path = ['JFK']
        let isFind = false
        function dfs(fromI) {


            if (path.length == tickets.length + 1) {
                isFind = true
                return
            }
            if (isFind) {
                return
            }
            if (!fromTO.has(fromI)) {
                return
            }
            let curAr = fromTO.get(fromI)
            // let copyCuAr = [...curAr]

            for (let i = 0; i < curAr.length; i++) {
                // const curTo = curAr[i];
                let curTo = curAr.shift()
                path.push(curTo)
                dfs(curTo)
                if (isFind) {
                    return
                }
                path.pop()
                curAr.push(curTo)
            }
            // while (curAr.length) {
            //     let curTo = curAr.shift()
            //     path.push(curTo)
            //     dfs(curTo)
            //     if (isFind) {
            //         return
            //     }
            //     path.pop()
            //     // curAr.push(curTo)
            //     // TODO: хз крч как туту оргназиовать нормально
            // }
            // curAr = copyCuAr



        }
        dfs('JFK')
        return path

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

tickets = [["BUF", "HOU"], ["HOU", "SEA"], ["JFK", "BUF"]]
// tickets = [["HOU", "JFK"], ["SEA", "JFK"], ["JFK", "SEA"], ["JFK", "HOU"]]
// tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]
// tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]

// tickets = [["EZE", "AXA"], ["TIA", "ANU"], ["ANU", "JFK"], ["JFK", "ANU"], ["ANU", "EZE"], ["TIA", "ANU"], ["AXA", "TIA"], ["TIA", "JFK"], ["ANU", "TIA"], ["JFK", "TIA"]]
// tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]

// tickets = [["EZE", "AXA"], ["TIA", "ANU"], ["ANU", "JFK"], ["JFK", "ANU"], ["ANU", "EZE"], ["TIA", "ANU"], ["AXA", "TIA"], ["TIA", "JFK"], ["ANU", "TIA"], ["JFK", "TIA"]]
tickets = [["EZE", "TIA"], ["EZE", "HBA"], ["AXA", "TIA"], ["JFK", "AXA"], ["ANU", "JFK"], ["ADL", "ANU"], ["TIA", "AUA"], ["ANU", "AUA"], ["ADL", "EZE"], ["ADL", "EZE"], ["EZE", "ADL"], ["AXA", "EZE"], ["AUA", "AXA"], ["JFK", "AXA"], ["AXA", "AUA"], ["AUA", "ADL"], ["ANU", "EZE"], ["TIA", "ADL"], ["EZE", "ANU"], ["AUA", "ANU"]]
console.log(' ::: ', sol.findItinerary(tickets));