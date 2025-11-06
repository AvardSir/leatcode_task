class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // вопрос как понять где последний элемент в эдж был
        let iToRank = new Map()
        let time = 0
        for (let j = 0; j < edges.length; j++) {
            const element = edges[j];
            let l = element[0]
            let r = element[1]
            iToRank.set(l, [time, element])
            time++
            iToRank.set(r, [time, element])
            time++
        }

        function egesPotentil(edges) {
            let visit = new Set()
            let lastEdge
            let potentialEgesSet = new Set()
            for (let i = 0; i < edges.length; i++) {
                const element = edges[i];

                let l = element[0]
                let r = element[1]

                if (visit.has(l) && visit.has(r)) {
                    // lastEdge = element
                    potentialEgesSet.add(element)
                }
                visit.add(l)
                visit.add(r)



            }
            return potentialEgesSet
        }
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
            let arL = fromTo.get(l)
            let arR = fromTo.get(r)

            arL.push(r)
            arR.push(l)

        }

        let visSet = new Set()
        let isFind = false
        let path = []
        // let path = new Set()

        function dfs(i, prevI) {
            if (isFind) {
                return
            }
            path.push(i)

            if (visSet.has(i) && i != prevI) {
                isFind = true
                return
            }

            let arChild = fromTo.get(i)
            visSet.add(i)
            for (let j = 0; j < arChild.length; j++) {
                const element = arChild[j];
                if (element != prevI) {
                    dfs(element, i)

                }
                if (isFind) {
                    return
                }

            }
            path.pop()
        }

        let firstNode = edges[0][0]
        dfs(firstNode)
        // TODO: path не нашел пцть
        path


        function egesPotentil(edges) {
            let visit = new Set()
            let lastEdge
            // let potentialEgesSet = new Set()
            let potentialEgesSet = []
            for (let i = 0; i < edges.length; i++) {
                const element = edges[i];

                let l = element[0]
                let r = element[1]

                if (visit.has(l) && visit.has(r)) {
                    // lastEdge = element

                    // potentialEgesSet.add(JSON.stringify(element))
                    potentialEgesSet.push(JSON.stringify(element))
                }
                visit.add(l)
                visit.add(r)



            }
            return potentialEgesSet
        }

        function pathToEdget(path) {
            let newPath = []
            for (let j = 0; j < path.length - 1; j++) {
                const element = path[j];

                let node = [path[j], path[j + 1]]
                node=node.sort((a, b) => a - b)

                newPath.push(node)


            }
            // let last = path[path.length - 1]
            // let preLast = path[path.length - 2]
            // let lastNode = [last, preLast]

            // newPath.push(lastNode)
            return newPath
        }
        let pathArr = pathToEdget(path)

        let chk1=1
        function pathArrToset(pathArr) {
            let pattSet = new Set()
            for (let i = 0; i < pathArr.length; i++) {
                let element = pathArr[i];
                element = JSON.stringify(element)
                pattSet.add(element)
            }
            return pattSet
        }
        let pathSet = pathArrToset(pathArr)
        for (let i = edges.length - 1; i > -1; i--) {
            let element = edges[i];;
            let strelement = JSON.stringify(element)
            if (pathSet.has(strelement)) {
                // path кажется непарвильно нашелся
                return element
            }
        }
        let hck = 1


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

edges = [[16, 25], [7, 9], [3, 24], [10, 20], [15, 24], [2, 8], [19, 21], [2, 15], [13, 20], [5, 21], [7, 11], [6, 23], [7, 16], [1, 8], [17, 20], [4, 19], [11, 22], [5, 11], [1, 16], [14, 20], [1, 4]]
console.log(' ::: ', sol.findRedundantConnection(edges));