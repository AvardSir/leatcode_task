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
    diameterOfBinaryTree(root) {
        let stack = [root];
        let mp = new Map();
        mp.set(null, [0, 0]);

        while (stack.length > 0) {
            let node = stack[stack.length - 1];

            if (node.left && !mp.has(node.left)) {
                stack.push(node.left);
            } else if (node.right && !mp.has(node.right)) {
                stack.push(node.right);
            } else {
                node = stack.pop();

                let [leftHeight, leftDiameter] = mp.get(node.left);
                let [rightHeight, rightDiameter] = mp.get(node.right);

                let height = 1 + Math.max(leftHeight, rightHeight);
                let diameter = Math.max(
                    leftHeight + rightHeight,
                    Math.max(leftDiameter, rightDiameter),
                );

                mp.set(node, [height, diameter]);
            }
        }
        return mp.get(root)[1];
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

console.log('Ответ::: ', a.invertTree(root));