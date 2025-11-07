const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
let minH = new MinPriorityQueue((v) => v[1])
let a = [1,23]
let b = [31,-2]
let c = [31,2]
minH.push(a)
minH.push(b)
minH.push(c)
// minH.front()
// minH.size()
console.log('minH.size::: ', minH.size());
console.log('minH.front()::: ', minH.front());

let chhel = 1