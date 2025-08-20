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
    maxPathSum(root) {

        let mp = new Map()
        mp.set(null, 0)
        let stack = [root]
        let max_path = -Infinity
        while (stack.length) {
            let curNode = stack[stack.length - 1]

            if (!mp.has(curNode.left)) {
                stack.push(curNode.left)
            }
            if (!mp.has(curNode.right)) {
                stack.push(curNode.right)
            }
            if (mp.has(curNode.right) && mp.has(curNode.left)) {
                curNode = stack.pop()

                let [l, r] = [mp.get(curNode.left), mp.get(curNode.right)]
                // console.log('l::: ', l);
                let sum = l + r + curNode.val
                // console.log('sum::: ', sum);
                let h = Math.max(Math.max(l, r) + curNode.val, curNode.val)
                // console.log('h::: ', h);

                max_path = Math.max(h, sum, max_path)
                // console.log('max_path::: ', max_path);

                mp.set(curNode, h)
            }

        }
        return max_path
    }
}


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function arrayToTree(arr) {
    if (arr.length === 0) return null;

    // Создаём корень из первого элемента
    const root = new TreeNode(arr[0]);
    const queue = [root]; // Очередь для обработки узлов
    let i = 1; // Индекс для прохода по массиву

    while (queue.length > 0 && i < arr.length) {
        const currentNode = queue.shift(); // Берем первый узел из очереди

        // Левый потомок
        if (i < arr.length && arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        // Правый потомок
        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}
let a = new Solution()

root = [4, 2, 7, 1, 3, 6, 9]
root = arrayToTree(root)

root = [1, 2, 3]
root = arrayToTree(root)
let root2 = [1, 2, 7, 1, 3, 6, 9]
root2 = arrayToTree(root2)

console.log('Ответ::: ', a.isSubtree(root, root2));