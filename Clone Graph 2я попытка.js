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
        if (node == null) {
            return null
        }
        let memo = new Map()
        // curOld->curNewNode

        function dfs(newCurNode, CurNode) {
            console.log('newCurNode::: ', newCurNode);
            console.log('CurNode.val::: ', CurNode.val);

            if (CurNode.val) {
                newCurNode.val = CurNode.val

            }

            let newNeibor = []
            for (let i = 0; i < CurNode.neighbors.length; i++) {
                const neibor = CurNode.neighbors[i];

                let newNode
                if (memo.has(neibor)) {
                    newNode = memo.get(neibor)
                    // newNeibor.push(dfs(new Node(), neibor))
                }
                else {

                    let newNOOOOD = new Node()
                    memo.set(neibor, newNOOOOD)
                    newNode = dfs(newNOOOOD, neibor)
                    memo.set(neibor, newNode)
                }

                newNeibor.push(newNode)


            }
            newCurNode.neighbors = newNeibor
            return newCurNode

        }

        return dfs(new Node(), node)
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