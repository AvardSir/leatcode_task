class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
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
// Пример использования
const rootArray = [4, 2, 7, 1, 3, 6, 9];
let tree = arrayToTree(rootArray)

let pas = 12