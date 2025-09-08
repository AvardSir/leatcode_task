
class MyMaxHeap {
    constructor() {
        this.heap = []
    }
    getParent(i) {
        return Math.ceil(i / 2) - 1
    }
    getLeftChild(i) {
        return i * 2 + 1
    }
    getRightChild(i) {
        return i * 2 + 2
    }
    add(val) {
        // this.heap = [5, 4, 2, 1]

        this.heap.push(val)

        let i = 0

        i = this.heap.length - 1

        while (true) {
            let curVal = this.heap[i]
            let curParentIndx = this.getParent(i)
            let curParentVal = this.heap[curParentIndx]

            if (curVal > curParentVal && i != curParentIndx) {
                [this.heap[curParentIndx], this.heap[i]] = [this.heap[i], this.heap[curParentIndx]]
                i = curParentIndx
            }
            else {
                break
            }
        }


        console.log('this.heap::: ', this.heap);


        // let i=
        // this.getParent(6)
        // console.log('this.getParent(3)::: ', this.getParent(6));
    }
    del() {
        let first = 0
        let last = this.heap.length - 1
        let h = this.heap;
        [h[0], h[h.length - 1]] = [h[h.length - 1], h[0]]

        // удаление
        h.pop()

        let i = 0
        while (true) {
            let l_ind = this.getLeftChild(i)
            let r_ind = this.getRightChild(i)

            let l = h[l_ind]
            let r = h[r_ind]


            let v = h[i]
            if (l > v || r > v) {
                if (l > r) {

                    // [l, v] = [v, l]
                    // меняем местами

                    [h[i], h[l_ind]] = [h[l_ind], h[i]]

                    i = l_ind
                    // допиши сдесь
                }
                else {
                    // допиши туту
                    i = r_ind
                }
            }
            else {
                break
            }
        }
        return this.heap
        let pas = 1
        // вроде сделал del add 
        // добавь в задачу
    }
}

let testHep = new MyMaxHeap()

testHep.add(3)
// tesHep.del()

// console.log('tesHep.del()::: ', testHep.del());
// sff



class MyMinHeap {
    constructor() {
        this.heap = []
    }
    getParent(i) {
        return Math.ceil(i / 2) - 1
    }
    getLeftChild(i) {
        return i * 2 + 1
    }
    getRightChild(i) {
        return i * 2 + 2
    }
    add(val) {
        this.heap = [1, 2, 3]

        this.heap.push(val)

        let i = 0

        i = this.heap.length - 1

        while (true) {
            let curVal = this.heap[i]
            let curParentIndx = this.getParent(i)
            let curParentVal = this.heap[curParentIndx]

            if (curVal < curParentVal && i != curParentIndx) {
                [this.heap[curParentIndx], this.heap[i]] = [this.heap[i], this.heap[curParentIndx]]
                i = curParentIndx
            }
            else {
                break
            }
        }


        // console.log('this.heap::: ', this.heap);


        // let i=
        // this.getParent(6)
        // console.log('this.getParent(3)::: ', this.getParent(6));
        return this.heap
    }
    del() {
        let first = 0
        let last = this.heap.length - 1
        let h = this.heap;
        [h[0], h[h.length - 1]] = [h[h.length - 1], h[0]]

        // удаление
        h.pop()

        let i = 0
        while (true) {
            let l_ind = this.getLeftChild(i)
            let r_ind = this.getRightChild(i)

            let l = h[l_ind]
            let r = h[r_ind]


            let v = h[i]
            if (l < v || r < v) {
                if (l < r) {

                    // [l, v] = [v, l]
                    // меняем местами

                    [h[i], h[l_ind]] = [h[l_ind], h[i]]

                    i = l_ind
                    // допиши сдесь
                }
                else {
                    // допиши туту
                    i = r_ind
                }
            }
            else {
                break
            }
        }
        return this.heap
        let pas = 1
        // вроде сделал del add 
        // добавь в задачу
    }
}

let testMinHep = new MyMinHeap()

// testMinHep.add(1)
// tesHep.del()
console.log('testMinHep.add(1)::: ', testMinHep.add(1)
);

console.log('tesHep.del()::: ', testMinHep.del());
// sff
