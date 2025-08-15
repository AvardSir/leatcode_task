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
        if (!root) {
            return 0
        }
        let stack = [root]
        let mp = new Map()
        mp.set(null, 0)
        let maxPath = 1
        while (stack.length) {
            let curNode = stack[stack.length - 1]
            if (curNode.left && !mp.has(curNode.left)) {
                // mp.has(curNode.left)
                stack.push(curNode.left)
            }
            else if (curNode.right && !mp.has(curNode.right)) {
                // mp.has(curNode.left)
                stack.push(curNode.right)
            }
            else {
                curNode = stack.pop()
                console.log('curNode::: ', curNode.val);
                let [left_h, right_h] = [mp.get(curNode.left), mp.get(curNode.right)]
                let h = 1 + Math.max(left_h, right_h)
                console.log('h::: ', h);
                let diametr = left_h + right_h + 1
                console.log('diametr::: ', diametr);
                maxPath = Math.max(maxPath, h, diametr)
                mp.set(curNode, h)
                // console.log('curNode::: ', curNode);
                // curNode =
                // mp.get(curNode.right)
            }
        }
        return maxPath - 1

    }
}



// в принцепе решено


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