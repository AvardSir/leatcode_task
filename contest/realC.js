class MinHeap {
    constructor(compare = (a, b) => a - b) {
        this.heap = [];
        this.compare = compare;
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown(0);

        return root;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _parent(index) {
        return Math.floor((index - 1) / 2);
    }

    _leftChild(index) {
        return index * 2 + 1;
    }

    _rightChild(index) {
        return index * 2 + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = this._parent(index);
            if (this.compare(this.heap[index], this.heap[parent]) < 0) {
                this._swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    _sinkDown(index) {
        const size = this.heap.length;

        while (true) {
            let smallest = index;
            const left = this._leftChild(index);
            const right = this._rightChild(index);

            if (left < size && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }

            if (right < size && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest !== index) {
                this._swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    toString() {
        return `MinHeap(${this.heap.join(', ')})`;
    }
}
module.exports = function memeSpreadTime(subscriptions, starters, target) {

    let graph = new Map()
    let heap = new MinHeap((a, b) => a[1] - b[1])
    // heap.push([0, 4])
    // heap.push([1, 2])

    // heap.push([1, 3])
    // let test = heap.pop()
    for (let i = 0; i < subscriptions.length; i++) {
        const element = subscriptions[i];
        let a = element[0]
        let b = element[1]
        let time = element[2]

        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        let arA = graph.get(a)
        arA.push([b, time])

        let arB = graph.get(b)
        arB.push([a, time])
    }

    for (let i = 0; i < starters.length; i++) {
        const start = starters[i];
        if (start == target) {
            return 0
        }
        if (!graph.has(start)) {
            continue
        }
        let curAr = graph.get(start)
        for (let j = 0; j < curAr.length; j++) {
            heap.push([start, 0])
        }
    }
    let memo = new Set()
    console.log('heap.size()::: ', heap.size());
    console.log('heap.size()::: ', heap.size);
    while (heap.size()) {
        
        let curNode = heap.pop()
        let V = curNode[0]
        let time = curNode[1]
        if (V == target) {
            return time
        }
        if (memo.has(V)) {
            continue
        }
        if (!graph.has(V)) {
            continue
        }
        memo.add(V)
        let curAr = graph.get(V)
        for (let i = 0; i < curAr.length; i++) {
            const element = curAr[i];
            let to = element[0]
            let elTime = element[1] + time
            heap.push([to, elTime])
        }
    }
    return -1
    // ваш код
}





function memeSpreadTime(subscriptions, starters, target) {
    let graph = new Map()
    let heap = new MinHeap((a, b) => a[1] - b[1])
    // heap.push([0, 4])
    // heap.push([1, 2])

    // heap.push([1, 3])
    // let test = heap.pop()
    for (let i = 0; i < subscriptions.length; i++) {
        const element = subscriptions[i];
        let a = element[0]
        let b = element[1]
        let time = element[2]

        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        let arA = graph.get(a)
        arA.push([b, time])

        let arB = graph.get(b)
        arB.push([a, time])
    }

    for (let i = 0; i < starters.length; i++) {
        const start = starters[i];
        if (start == target) {
            return 0
        }
        if (!graph.has(start)) {
            continue
        }
        let curAr = graph.get(start)
        for (let j = 0; j < curAr.length; j++) {
            heap.push([start, 0])
        }
    }
    let memo = new Set()
    while (heap.size) {
        let curNode = heap.pop()
        let V = curNode[0]
        let time = curNode[1]
        if (V == target) {
            return time
        }
        if (memo.has(V)) {
            continue
        }
        if (!graph.has(V)) {
            continue
        }
        let curAr = graph.get(V)
        for (let i = 0; i < curAr.length; i++) {
            const element = curAr[i];
            let to = element[0]
            let elTime = element[1] + time
            heap.push([to, elTime])
        }
    }
    return -1
    let htht = 1
}



subscriptions = [[1, 2, 2], [2, 3, 3], [3, 4, 1], [4, 3, 1], [1, 4, 8]]
starters = [1, 4]
target = 3

// output 1

console.log('', memeSpreadTime(subscriptions, starters, target));
