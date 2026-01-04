//to//



class pathNode {
    constructor(i, j) {
        this.i = i
        this.j = j

        this.maxUpCount = 0
        this.maxDownCount = 0

        this.arrNodeUp = []
        this.arrNodeDown = []
    }

    count() {
        return 1 + this.maxUpCount + this.maxDownCount
    }

    adUp(node) {

        // node.j
        // [node.i,node.j]
        let nodeCount = node.count()

        if (this.maxUpCount < nodeCount) {
            this.maxUpCount = nodeCount
            // need update Down

        }
    }

    findMaxCountUP() {
        let curMax = -Infinity
        for (let i = 0; i < this.arrNodeUp.length; i++) {
            const element = this.arrNodeUp[i];


            curMax = Math.max(element.maxUpCount)

        }
        this.maxUpCount = curMax
    }
    // todo
    // findMaxCountDowmn

    updateDown() {
        for (let i = 0; i < this.arrNodeDown.length; i++) {
            const nodeDown = this.arrNodeDown[i];
            // TODO updateDown
            // Node?  
            // this.i
            // this.j

            // this.maxUpCount = 0
            // this.maxDownCount = 0

            // this.arrNodeUp = []
            // this.arrNodeDown = []

        }
    }

    uppperThan(nodeUnder) {
        let [inodeUnder, jnodeUnder] = [nodeUnder.i, nodeUnder.j]
        // todo

        // this.arrNodeUp.push()


        nodeUnder.arrNodeUp.push(this)


        // повысиь низ
        this.arrNodeDown.push(nodeUnder)

        // проверить низ

        // проверить есть ли верх
        // обновить что выше 
        let hhth = 1
    }

    // adDown
    // updatUP
}


class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {


        // let [count, UPAr, DownAr] = [0, [], []]
        // let testEl = [count, UPAr, DownAr]

        let dp = Array.from({ length: matrix.length }, (v, i) => Array.from({ length: matrix.length }, (v, j) => new pathNode(i, j)))

        let test2442 = 1


        function linkA_B(a, b) {

            // a это то наш Основной элемент 
            // b это элемент который мы чекаем 
            // они близко друг к другу расположены b либо справа либо снизу 

            // dpA
            let [iA, jA] = a
            let aEl = matrix[iA][jA]
            let aNode = dp[iA][jA]

            // dpB
            let [iB, jB] = b
            let bEl = matrix[iB][jB]
            let bNode = dp[iB][jB]

            if (aEl < bEl) {
                bNode.uppperThan(aNode)
            }
            else if (aEl > bEl) {
                // todo
                aNode.uppperThan(bNode)

            }
        }

        function checkIJ(i, j) {
            // право 
            if (j < matrix[0].length - 1) {
                // j + 1 ok

                let a = [i, j]

                let b = [i, j + 1]
                linkA_B(a, b)

            }
            // низ 
            if (i < matrix.length - 1) {
                // i+1 ok

                let a = [i, j]

                let b = [i + 1, j]
                linkA_B(a, b)

            }
        }
        for (let i = 0; i < matrix.length; i++) {
            // const element = matrix[i];

            for (let j = 0; j < matrix[i].length; j++) {
                const number = matrix[i][j];

                // todo продолжит обработку pathNode
                checkIJ(i, j)
            }

        }


    }
}


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let sol = new Solution()

// matrix = [[5, 5, 3], [2, 3, 6], [1, 1, 1]]

matrix = [[1, 2, 3], [2, 3, 6], [1, 1, 1]]


console.log('::: ', sol.longestIncreasingPath(matrix)); 