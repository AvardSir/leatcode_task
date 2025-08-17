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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // console.log('p::: ', p);

        // получается p или q могут равняться null? 
        // габела
        if (p) {
            p = p.val
        }
        if (q) {
            q = q.val
        }


        let mp = new Map()
        // найти smal, big root.val 
        let smal, big
        if (p < q) {
            smal = p
            big = q
        }
        else {
            smal = q
            big = p
        }
        // function innerLCA(root) {

        // }
        let stac = [root]
        // габела случай  2 1 3 ок 
        //  но случай когда типо дитя больше ноды но и является 
        // дятем дитя
        //  2
        // 1 
        //   3


        while (stac.length) {
            let curNode = stac.pop()
            let curVal = curNode.val
            if (curVal == p) {
                console.log('curNode::: ', curNode);
                а
                return curNode

            }
            else if (curVal == q) {
                console.log('curNode::: ', curNode);
                return curNode

            }

            if (curVal < q && curVal < p) {

                stac.push(curNode.right)
            }
            else if (curVal > q && curVal > p) {

                stac.push(curNode.left)
            }
            else {
                // q<val>p или p<val>q
                console.log('curN22ode::: ');

                return curNode
            }
        }

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