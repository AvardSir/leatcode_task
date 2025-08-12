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
        // длина пути для iй ноды 

        // это дли макс путь левой+макс путь правой
        // let height это длина от ноды до самого 
        // длиного по глубине ребенка
        // max будет просто пересравниваться
        // надо прост height_Left+height_Righgt +1 сравнить с max



        // глубина+ кэш?
        // идти снизу считать и кэшировать
        // если ответа нет в кэшэ null
        let cash = new Map()
        let max_path = 1
        function dfs(node) {
            // проблемы случай когда 1 нода дитя пустое не продуман
            // также нет выбора макс длины ноды
            if (cash.has(node)) {
                console.log('cash.get(node)::: ', cash.get(node));

                return cash.get(node)
            }
            if (!node.left && !node.right) {
                cash.set(node, 1)
                return cash.get(node)
            }
            let h
            let curPath
            if (node.left && node.right) {
                // проерить есть ли значени для лева
                let l = dfs(node.left)
                let r = dfs(node.right)
                // console.log('node::: ', node.val);
                curPath = l + r + 1
                // console.log('curPath::: ', curPath);
                // console.log('l::: ', l);
                // console.log('r::: ', r);

                max_path = max_path < curPath ? curPath : max_path

                h = 1 + (l > r ? l : r)
                // console.log('h::: ', h);
                max_path = max_path < h ? h : max_path

                cash.set(node, h)
                return cash.get(node)
            }
            else if (node.left) {
                h = 1 + dfs(node.left)
                curPath = h
                max_path = max_path < curPath ? curPath : max_path
                cash.set(node, h)
                return cash.get(node)
            }
            else if (node.right) {
                h = 1 + dfs(node.right)

                curPath = h
                max_path = max_path < curPath ? curPath : max_path

                cash.set(node, h)
                return cash.get(node)
            }
        }
        dfs(root)
        return max_path - 1
        let pas = 1
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