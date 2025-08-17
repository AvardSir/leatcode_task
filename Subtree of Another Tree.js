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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) {
            return true
        }
        if (!root) {
            return false
        }
        function compare(q, p) {


            let stack = [[q, p]]
            while (stack.length) {
                let [q, p] = stack.shift()
                // console.log('p::: ', p);
                // console.log('q::: ', q);
                if (q === null && p === null) {
                }
                else if (q && !p || !q && p) {

                    return false
                }
                else if (q.val !== p.val) {
                    return false
                }

                if (q.left || p.left) {
                    stack.push([q.left, p.left])
                }
                if (q.right || p.right) {
                    stack.push([q.right, p.right])
                }
            }
            return true

        }

        let stack = [root]
        while (stack.length) {
            let curNode = stack.pop()
            if (curNode.val == subRoot.val) {
                if (compare(curNode, subRoot)) {
                    return true
                }
            }
            if (curNode.left) {
                stack.push(curNode.left)
            }
            if (curNode.right) {
                stack.push(curNode.right)
            }
        }
        return false

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
let root2 = [1, 2, 7, 1, 3, 6, 9]
root2 = arrayToTree(root)

console.log('Ответ::: ', a.isSubtree(root, root2));