class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {

        let fromTo = new Map()
        for (let i = 0; i < tickets.length; i++) {
            const element = tickets[i];
            let l = element[0]
            let r = element[0]
            fromTo.set(l, [])
            // fromTo.set(r, [])
        }
        for (let i = 0; i < tickets.length; i++) {
            const element = tickets[i];
            let l = element[0]
            let r = element[1]

            let lAr = fromTo.get(l)
            lAr.push([r, JSON.stringify([l, r])])
            // get L -> [r, json ([l,r])]
        }
        let mapArrOfKeysValues = Array.from(fromTo.entries())
        for (let pI = 0; pI < mapArrOfKeysValues.length; pI++) {
            const element = mapArrOfKeysValues[pI];
            let key = element[0]
            let curAr = fromTo.get(key)
            curAr.sort()
            let hth = 1
        }
        let chh = 1


        let visit = new Set()
        let isFindSol = false
        let path = []
        function dfs(fromI) {

            // тут мб проблемы с када надо кончать 
            if (visit.size == tickets.length) {
                isFindSol = true
                path.push(fromI)

                return
            }


            if (!fromTo.has(fromI)) {
                return
            }

            if (isFindSol) {
                return
            }
            path.push(fromI)



            let curArChild = fromTo.get(fromI)

            // curArChild.sort()
            for (let i = 0; i < curArChild.length; i++) {
                let [to, strFromTO] = curArChild[i];
                if (visit.has(strFromTO)) {
                    continue
                }
                visit.add(strFromTO)
                dfs(to)
                if (isFindSol) {
                    return
                }
                visit.delete(strFromTO)

                // lAr.push([r, JSON.stringify([l, r])])

            }
            path.pop()

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
tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]

tickets = [["EZE", "AXA"], ["TIA", "ANU"], ["ANU", "JFK"], ["JFK", "ANU"], ["ANU", "EZE"], ["TIA", "ANU"], ["AXA", "TIA"], ["TIA", "JFK"], ["ANU", "TIA"], ["JFK", "TIA"]]
console.log(' ::: ', sol.findItinerary(tickets));