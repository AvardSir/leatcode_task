/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

        function innerinvertTree(root) {
            if (!root) {
                return
            }

            innerinvertTree(root.left)
            innerinvertTree(root.right)

            let left = root.left
            let right = root.right
            root.left = right
            root.right = left
        }

        innerinvertTree(root)
        return root

    }
}

function arrayToTree(rootArray) {
    let startNode = new TreeNode(rootArray[0])
    // 's'.length
    let i = 1
    let queq = [startNode]
    while (i < rootArray.length) {
        let curNode = queq.shift()
        if (i < rootArray.length) {
            curNode.left = new TreeNode(rootArray[i])
            queq.push(curNode.left)
        }
        i++
        if (i < rootArray.length) {
            curNode.right = new TreeNode(rootArray[i])
            queq.push(curNode.right)
        }
        i++
    }
    return startNode
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
let a = new Solution()

root = [4, 2, 7, 1, 3, 6, 9]
root = arrayToTree(root)

console.log('Ответ::: ', a.invertTree(root));