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

        // длина пути для iй ноды 
        
        // это дли макс путь левой+макс путь правой
        // let height это длина от ноды до самого 
        // длиного по глубине ребенка
        // max будет просто пересравниваться
        // надо прост height_Left+height_Righgt +1 сравнить с max

        // вопрос как длину посчитать? 
        // функция глубины? по сути она 

        // глубина+ кэш?
        // идти снизу считать и кэшировать
        // если ответа нет в кэшэ null

        let queue = [[root, height]]
        while (queue.length) {
            let curNode = queue.pop()

            if (curNode.left) {
                queue.push(curNode.left)
            }
            if (curNode.right) {
                queue.push(curNode.right)
            }
            if (!curNode.left && !curNode.right) {

            }
        }

        max_height = (max_height_Left или max_height_RIght) +1

        let nodeEl = [node, max_height,]
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