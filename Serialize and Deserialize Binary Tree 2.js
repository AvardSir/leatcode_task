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

class Codec {

    serialize(root) {


        if (!root) return '';

        let stack = [root]
        let ans_str = ''

        // TODO: Runtime Error(NZEC)

        // узнать у дипсик почему

        while (stack.length) {
            let n = stack.length
            for (let i = 0; i < n; i++) {
                let curNode = stack.shift()
                if (curNode) {
                    ans_str = ans_str + curNode.val.toString() + '$';

                    stack.push(curNode.left)
                    // console.log('stack::: ', stack);
                    stack.push(curNode.right)
                }
                else {
                    ans_str = ans_str + '#' + '$'
                }
            }
        }
        return ans_str
    }


    deserialize(data) {
        if (data == '') {
            return null
        }
        data = data.split('$')
        // data.shift() //убрать лишний элемент сначала

        let root = data.shift()
        if (!isNaN(root)) {
            root = new TreeNode(Number(root))
        }
        else {
            return null
        }

        let i = 0
        let curNode = root

        let stack = [root]
        while (stack.length) {
            curNode = stack.shift()

            let l = data[i]
            if (l != '#') {
                l = Number(l)
                curNode.left = new TreeNode(l)
                stack.push(curNode.left)
            }

            i++
            let r = data[i]
            if (r != '#') {
                r = Number(r)
                curNode.right = new TreeNode(r)
                stack.push(curNode.right)
            }

            i++

        }

        return root
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
let a = new Codec()

root = [4, 2, 7, 1, 3, 6, 9]
root = arrayToTree(root)

root = [1, 2, -3]
root = arrayToTree(root)
let root2 = [1, 2, 7, 1, 3, 6, 9]
root2 = arrayToTree(root2)

// root.left = null
let root3 = a.serialize(root)

// deserialize(root3)
console.log('Ответ::: ', a.serialize(root));
console.log('deserialize(root3)::: ', a.deserialize(root3));
