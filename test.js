const { PriorityQueue } = require('@datastructures-js/priority-queue');

const pq = new PriorityQueue((a, b) => b[1]-a[1]  );

pq.enqueue([5, -1]);
pq.enqueue([2, 2]);
pq.enqueue([3, "baz"]);

console.log(pq.dequeue()); // [2, "bar"]
