class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let fromTo = new Map()
        for (let i = 0; i < edges.length; i++) {
            const element = edges[i];

            let l = element[0]
            let r = element[1]

            if (!fromTo.has(l)) {
                fromTo.set(l, [])
            }

            if (!fromTo.has(r)) {
                fromTo.set(r, [])
            }

            let lAr = fromTo.get(l)
            let rAr = fromTo.get(r)

            lAr.push(r)
            rAr.push(l)

        }

        let chek2 = 1

        let iToParent = new Map()
        for (let i = 0; i < n; i++) {
            const element = i;
            iToParent.set(i, [i, 1])
        }

        function compare(a, b) {
            a = findParent(a)
            b = findParent(b)

            if (a == b) {
                // countComponents++
                return false
            }

            let infA = iToParent.get(a)
            let parentA = infA[0]
            let rankA = infA[1]

            let infB = iToParent.get(b)
            let parentB = infB[0]
            let rankB = infB[1]

            if (rankA == rankB) {
                let newInf = [parentA, rankA + 1]
                iToParent.set(a, newInf)
                iToParent.set(b, newInf)

            }
            else if (rankA > rankB) {
                let newInf = [parentA, rankA + rankB]
                iToParent.set(a, newInf)
                iToParent.set(b, newInf)
            }
            else {
                // TODO скорее всего проблема в подсчете ранка
                let newInf = [parentB, rankA + rankB]
                iToParent.set(a, newInf)
                iToParent.set(b, newInf)

            }

            return true
        }
        function findParent(node) {
            let curNode = node
            let curParent = iToParent.get(curNode)[0]

            while (curParent != curNode) {
                curNode = curParent
                curParent = iToParent.get(curNode)[0]

            }
            return curNode
        }


        let countComponents = n
        // let visited = new Set()
        for (let i = 0; i < n; i++) {
            const element = i;

            // if (visited.has(element)) {
            //     continue
            // }
            let childAr
            if (fromTo.has(i)) {
                childAr = fromTo.get(i)
            }
            else {
                continue
            }

            for (let j = 0; j < childAr.length; j++) {
                const child = childAr[j];
                let a = findParent(element)
                let b = findParent(child)

                if (compare(child, element)) {

                    // visited.add(child)
                    countComponents--
                    // visited.add(child)
                }





                // вот тут

            }
            // visited.add(element)





        }

        return countComponents


        let chek = 1
    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()
numCourses = 2, prerequisites = [[0, 1]]

numCourses = 3, prerequisites = [[1, 0]]
numCourses = 3, prerequisites = [[0, 1], [1, 2], [2, 0]]
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

n = 3
edges = [[0, 1], [0, 2]]

n = 6
edges = [[0, 1], [1, 2], [2, 3], [4, 5]]

n = 3
edges = [[0, 1], [0, 2], [1, 2]]

n = 20
edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [1, 16], [1, 17], [1, 18], [1, 19], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15], [2, 16], [2, 17], [2, 18], [2, 19], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14], [3, 15], [3, 16], [3, 17], [3, 18], [3, 19], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 13], [4, 14], [4, 15], [4, 16], [4, 17], [4, 18], [4, 19], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [5, 12], [5, 13], [5, 14], [5, 15], [5, 16], [5, 17], [5, 18], [5, 19], [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [6, 16], [6, 17], [6, 18], [6, 19], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13], [7, 14], [7, 15], [7, 16], [7, 17], [7, 18], [7, 19], [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14], [8, 15], [8, 16], [8, 17], [8, 18], [8, 19], [9, 10], [9, 11], [9, 12], [9, 13], [9, 14], [9, 15], [9, 16], [9, 17], [9, 18], [9, 19], [10, 11], [10, 12], [10, 13], [10, 14], [10, 15], [10, 16], [10, 17], [10, 18], [10, 19], [11, 12], [11, 13], [11, 14], [11, 15], [11, 16], [11, 17], [11, 18], [11, 19], [12, 13], [12, 14], [12, 15], [12, 16], [12, 17], [12, 18], [12, 19], [13, 14], [13, 15], [13, 16], [13, 17], [13, 18], [13, 19], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19], [15, 16], [15, 17], [15, 18], [15, 19], [16, 17], [16, 18], [16, 19], [17, 18], [17, 19], [18, 19]]

n = 3
edges = [[0, 1], [0, 2], [1, 2]]

// n = 12
// edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [6, 7], [7, 4], [8, 9], [10, 11]]

// TODO: наверно проблема в окмопнненте 6-7-4-5 
// он считает 5 компненнт а надо 4 

n = 6
edges = [[0, 1], [1, 2], [2, 3], [4, 5]]


n = 4
edges = [[0, 1], [1, 2], [2, 3], [3, 0]]


console.log(' ::: ', sol.countComponents(n, edges));