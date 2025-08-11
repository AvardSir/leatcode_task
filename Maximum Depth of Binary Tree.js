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
     * @return {number}
     */
    maxDepth(root) {

        if (!root) {
            return 0
        }
        let maxDep = 1
        let queue = [[root, maxDep]]

        while (queue.length) {
            let curNode = queue.shift()
            let curRoot = curNode[0]
            let curDep = curNode[1]
            curDep++
            if (curRoot.left) {
                maxDep = curDep > maxDep ? curDep : maxDep
                queue.push([curRoot.left, curDep])
            }
            if (curRoot.right) {

                maxDep = curDep > maxDep ? curDep : maxDep
                queue.push([curRoot.right, curDep])
            }
        }
        return maxDep
    }
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