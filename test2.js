let str = 'intervals=[(0,50),(10,60),(60,110),(70,120),(20,70),(30,80),(40,90),(50,100),(80,130),(90,140),(100,150)]'

str = str.replaceAll('(', '[')
str = str.replaceAll(')', ']')
// console.log(str);

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let minH = new MinPriorityQueue((entry) => entry[0])

let minH2 = new MinPriorityQueue((v) => v[0])

minH2.push([555, '2222'])

minH2.push([232, '2222'])

minH2.push([444, '2222'])

// minH.front()
// minH.size()
// console.log('minH.size::: ', minH.size());
console.log('minH.front()::: ', minH2.front());
