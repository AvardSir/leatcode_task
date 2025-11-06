class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let iToParent = new Map()

        let maxEl = -Infinity
        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];
            let l = element[0]
            let r = element[1]

            maxEl = Math.max(l, r, maxEl)

        }
        for (let i = 1; i < maxEl + 1; i++) {
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
            if (chekIto === undefined) {
                let chek42 = 14
            }
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
            let newaParent
            if (rankB > rankA) {
                newaParent = bParent
            }
            else {
                newaParent = aParent
            }

            rankA = rankB + rankA

            let newInfNode = [newaParent, rankA]

            iToParent.set(aParent, newInfNode)
            iToParent.set(bParent, newInfNode)


            iToParent.set(a, newInfNode)
            iToParent.set(b, newInfNode)

            let chek = 1
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
            if (l == 1 && r == 4) {
                let chk1 = 2
            }
            // [1, 4]
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

edges = [[16, 25], [7, 9], [3, 24], [10, 20], [15, 24], [2, 8], [19, 21], [2, 15], [13, 20], [5, 21], [7, 11], [6, 23], [7, 16], [1, 8], [17, 20], [4, 19], [11, 22], [5, 11], [1, 16], [14, 20], [1, 4]]

edges = [[7, 16],
[7, 11],

[5, 11],

[5, 21],

[19, 21],

[4, 19],



[1, 16]
    ,
[1, 4]]


let totalAr = [
    [16, 25], [7, 9],
    [3, 24], [10, 20],
    [15, 24], [2, 8],
    [2, 15], [13, 20],
    [6, 23], [1, 8],
    [17, 20], [11, 22],
    [14, 20]
]

// а ну да там цикла нет
// задача

// поделим масив на два
// посчитаем скока ранк 
console.log(' ::: ', sol.findRedundantConnection(totalAr));