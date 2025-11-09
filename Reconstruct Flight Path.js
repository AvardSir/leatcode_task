class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {

        let startPoint = 'JFK'
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
            // let rAr = fromTo.get(r)

            // fromTo.set(l, [])
            // fromTo.set(r, [])
        }

        // let ans = []
        let visit = new Set()

        function findMinLexutInArStr(ArStr) {
            let minVal = ArStr[0]
            for (let i = 1; i < ArStr.length; i++) {
                const element = ArStr[i];
                if (!visit.has(element) && minVal > element) {
                    minVal = element
                }

            }
            return minVal
        }
        let ans = []

        let isFindSol = false
        let path = []
        function dfs(fromI) {
            // if (visit.has(fromI)) {
            //     return
            // }
            if (path.length == tickets.length+1 ) {
                isFindSol = true
                return
            }
            if (isFindSol) {
                return
            }
            if (!fromTo.has(fromI)) {
                return
            }
            let curArChild = fromTo.get(fromI)
            path.push(fromI)
            curArChild.sort()
            while (curArChild.length) {
                let curNode = curArChild.shift()
                let curTo = curNode[0]
                let curStr = curNode[1]
                if (visit.has(curStr)) {
                    continue
                }
                visit.add(curStr)
                let elToAdToAnswee = [fromI, curTo]
                // ans.push(elToAdToAnswee)
                dfs(curTo)
                if (isFindSol) {
                    return
                }
            }
            curArChild.pop()
            // for (let i = 0; i < curArChild.length; i++) {
            //     const toFly = curArChild[i];
            //     // это строка куда лететь 


            // }
        }
        let fromI = startPoint
        dfs(fromI)

        return path

        function ansToRightForm(ans) {
            let trueAns = []
            trueAns.push(ans[0][0])

            for (let i = 0; i < ans.length; i++) {
                const element = ans[i];
                let r = element[1]
                trueAns.push(r)
                // [l,r]

            }
            return trueAns
            // trueAns.push(ans[ans.length - 1][1])
        }
        ans = ansToRightForm(ans)

        return ans

    }
}



const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

tickets = [["BUF", "HOU"], ["HOU", "SEA"], ["JFK", "BUF"]]
// tickets = [["HOU", "JFK"], ["SEA", "JFK"], ["JFK", "SEA"], ["JFK", "HOU"]]
// tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]

console.log(' ::: ', sol.findItinerary(tickets));