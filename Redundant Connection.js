class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let iToParent = new Map()
        for (let i = 1; i < edges.length + 1; i++) {
            const element = i;
            // el->[i,rank]
            iToParent.set(element, [element, 1])

        }
        let chek = 1
        // find parent
        // while cur!=parent.get(cur)
        function findParent(node) {
            let firstNode = node
            let curNode = node
            let chekIto = iToParent.get(curNode)
            let parent = chekIto[0]
            while (curNode != parent) {
                curNode = parent
                chekIto = iToParent.get(curNode)
                parent = chekIto[0]
                // parent = iToParent.get(curNode)[0]
            }
            // let curInf = iToParent.get(curNode)
            return chekIto
        }

        // compare
        // return true if parentA==parentB && parentA!=1
        // return false +compare
        function compare(a, b) {


            let aParentInf = findParent(a)
            let bParentInf = findParent(b)



            let aParent = aParentInf[0]
            let bParent = bParentInf[0]

            let rankA = aParentInf[1]
            let rankB = bParentInf[1]


            if (aParent == bParent) {
                return true
            }

            if (rankB > rankA) {
                aParent = bParent
            }
            rankA = rankB + rankA

            let newInfNode = [aParent, rankA]

            iToParent.set(aParent, newInfNode)
            iToParent.set(bParent, newInfNode)


            iToParent.set(a, newInfNode)
            iToParent.set(b, newInfNode)

            let chek = 1
            // if (rankA > rankB || rankA == rankB) {
            //     rankA += rankB

            //     // iToParent.set(a, [aParentInf, rankA])
            //     // iToParent.set(b, [aParentInf, rankA])
            // }
            // else {
            //     // rankA += rankB
            //     rankB += rankA

            // }
            return false

        }
        // let a = 0
        // let b = 1
        // compare(a, b)

        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];

            // todo; проблем чт в compare ошибка
            let l = element[0]
            let r = element[1]
            if (l == 4 && r == 10) {
                let chk1 = 2
            }
            if (compare(l, r)) {
                return element
            }

        }

        let chekCOmpare = 23
    }
}



class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()


edges = [[1, 2], [1, 3], [3, 4], [2, 4]]
// edges = [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]]

// edges = [[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]

edges = [[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]
edges = [[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]

edges = [[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]

edges = [[16, 25], [7, 9], [3, 24], [10, 20], [15, 24], [2, 8], [19, 21], [2, 15], [13, 20], [5, 21], [7, 11], [6, 23], [7, 16], [1, 8], [17, 20], [4, 19], [11, 22], [5, 11], [1, 16], [14, 20], [1, 4], [22, 23], [12, 20], [15, 18], [12, 16]]
console.log(' ::: ', sol.findRedundantConnection(edges));