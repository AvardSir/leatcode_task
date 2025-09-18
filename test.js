const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// Инициализация с коллбэком, который достаёт поле priority
let testH = new MaxPriorityQueue((item) => item.priority);

// Теперь enqueue принимает ТОЛЬКО объект (без второго аргумента!)
testH.push({ value: 4, priority: 22 });
testH.push({ value: 3, priority: 3 });
testH.push({ value: 's', priority: 5 });

console.log('=== ДИАГНОСТИКА ===');

// console.log('Front():', testH.front());             // { value: 33, priority: 33 }
// console.log('Front value:', testH.front().value);   // 33
// console.log('Front priority:', testH.front().priority); // 33

console.log('Dequeue():', testH.pop());         // { value: 33, priority: 33 }
// console.log('ToArray():', testH.toArray());         // оставшиеся элементы
