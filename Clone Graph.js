/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */


class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    cloneGraph(node) {
        let newNode = new Node()

        let curNewNode = newNode
        // let ar = []
        // ar.length
        let queq = [node]
        let visited = new Set()

        let check2 = 2

        // visited.add(node)
        // visited.has(node)
        // console.log('visited.has(node)::: ', visited.has(node));



        let check1 = 1


        while (queq.length) {

            let curNode = queq.pop()
            if (!visited.has(curNode)) {
                // curNewNode=new Node(curNode.val)
                visited.add(curNode)

                let newNebors=[]
                ?
                for (let i = 0; i < curNode.neighbors.length; i++) {
                    const neighbor = curNode.neighbors[i];
                    queq.push(neighbor)

                }
                queq.push()
            }
        }
    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
let sol = new Solution()

grid = [
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1]
]


console.log(' ::: ', sol.cloneGraph(node));