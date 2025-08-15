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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true
        }
        if (!root.left && !root.right) {
            return true
        }
        let mp = new Map()
        mp.set(null, 0)

        let deep = 1
        let maxDeep = 1
        let node = [root, deep]
        let stack = [node]
        let flag = false

        // let SuperMaxDep = 1
        while (stack.length) {
            // let curNode = stack[stack.length - 1]
            // let curNode = stack.shift()
            let [curNode, deep] = stack.shift()
            // console.log('curNode::: ', curNode.val);
            deep++
            if (curNode.left) {
                stack.push([curNode.left, deep])
            }
            if (curNode.right) {
                stack.push([curNode.right, deep])
            }
            if (!curNode.left && !curNode.right) {
                // console.log('curNode::: ', curNode);
                if (maxDeep == 1) {
                    maxDeep = deep
                }
                else if (maxDeep + 1 == deep || maxDeep - 1 == deep || maxDeep == deep) {
                    flag = true
                    // console.log('flag::: ', flag);
                    // все ок
                }
                else {
                    curNode.val
                    console.log('curNode.val::: ', curNode.val);

                    console.log('deep::: ', deep);
                    console.log('maxDeep::: ', maxDeep);
                    return false
                }
            }

            // if (curNode.left && !mp.has(curNode)) {
            //     stack.push(curNode)
            // }
            // else if (curNode.right && !mp.has(curNode.right)) {
            //     stack.push(curNode.right)
            // }
            // else {
            //     //нету правого левого 
            //     // или элемнт есть в словаре

            // }
        }
        if (!flag && maxDeep > 3) {
            console.log('maxDeep::: ', maxDeep);
            console.log('flag::: ', flag);
            return false
        }
        return true
    }
}
// TODO: отладка wronng ans 



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