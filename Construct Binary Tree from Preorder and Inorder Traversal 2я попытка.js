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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder || !inorder) {
            return null

        }
        if (preorder.length == 1) {
            return new TreeNode(preorder[0])
        }

        let stack = [preorder[0]]
        let root = new TreeNode(preorder[0])

        let copy_preorder = [...preorder]
        copy_preorder.shift() //убрать 1ю ноду 
        let copy_inorder = [...inorder]

        // while (stack.length) {
        //     let curNode = stack[stack.length - 1]

        // }
        function dfs(mid, In, Pre) {
            // индекс мида в Pre
            let left_end_indx_pre, right_start_indx_pre
            for (let i = 0; i < Pre.length; i++) {
                const element = Pre[i];
                if (element == mid) {
                    left_end_indx_pre = i
                    right_start_indx_pre = i + 1
                }

            }
            let left_pre = Pre.slice(0, left_end_indx_pre)
            let right_pre = []
            if (Pre[right_start_indx_pre]) {
                right_pre = Pre.slice(right_start_indx_pre, Pre.length)
            }
            let mid_L, i_l
            // получается проверка IN надо
            for (let i = 0; i < In.length; i++) {
                const elementIn = In[i];
                for (let j = 0; j < left_pre.length; j++) {
                    const element_left_pre = left_pre[j];
                    if (elementIn == element_left_pre) {
                        // нашли мид
                        mid_L = j
                        i_l = i
                    }
                }
            }

            let mid_R, i_Gran
            for (let i = i_l; i < In.length; i++) {
                const elementIn = In[i];
                for (let j = 0; j < right_pre.length; j++) {
                    const element_right_pre = right_pre[j];
                    if (elementIn == element_right_pre) {
                        mid_R = j
                        i_Gran = i
                    }
                }
            }

            // In левоп право резка
            let InLeft = In.slice(0, mid_L)
            if (In[mid_L + 1]) {
                InLeft = [...InLeft, In.slice(mid_L + 1, i_Gran)]
            }
            let InRight = []
            if (InRight != i_Gran) {
                InRight = In.slice(i_Gran, InRight)

            }
            if (In[mid_R + 1]) {
                InRight = [...InRight, In.slice(mid_R + 1, In.length)]
            }


            let root = new TreeNode(mid)
            if (mid_L) {
                root.left = new TreeNode(mid_L)
                dfs(root.left, InLeft, left_pre)
            }

            if (mid_R) {
                root.right = new TreeNode(mid_R)
                dfs(root.right, InRight, right_pre)
            }
        }
        dfs(root, copy_inorder, copy_preorder)
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