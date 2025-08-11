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

// Пример использования
const rootArray = [4, 2, 7, 1, 3, 6, 9];
let tree = arrayToTree(rootArray)


// let arr = [1, 2, 3]
// while (arr.length) {
//     // arr.pop()
//     console.log('arr.pop()::: ', arr.pop());
// }
let ar2 = [3, 4, 5]
let [third, ...other] = ar2
console.log('other::: ', other);
console.log('third::: ', third);

let ar3 = [1, 2]
ar3.unshift(3)
ar3.push(4)

let arIndexToDel = [0, 3]
ar3 = ar3.filter((v, i) => arIndexToDel.includes(i))
let pas = 12