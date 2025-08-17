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
     * @return {string}
     */
    serialize(root) {

        if (root === null) {
            return '$#';
        }
        return (
            '$' +
            root.val +
            this.serialize(root.left) +
            this.serialize(root.right)
        );
    }

    /**
     * @param {string} s
     * @return {number[]}
     */

    // протиай дипсик
    z_function(s) {
        s = 'bc|abc'
        // TODO: прочекать по очереди
        const z = new Array(s.length).fill(0);
        let l = 0,
            r = 0,
            n = s.length;
        for (let i = 1; i < n; i++) {
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }
            while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
                z[i]++;
            }
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const serialized_root = this.serialize(root);
        const serialized_subRoot = this.serialize(subRoot);
        const combined = serialized_subRoot + '|' + serialized_root;

        const z_values = this.z_function(combined);
        const sub_len = serialized_subRoot.length;

        for (let i = sub_len + 1; i < combined.length; i++) {
            if (z_values[i] === sub_len) {
                return true;
            }
        }
        return false;
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