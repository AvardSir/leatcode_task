
class MyHeap {
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
        // this.heap = [5, 4,  2, 1]

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
        let heap = this.heap
        [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
        let pas = 1

    }
}

let tesHep = new MyHeap()


tesHep.add(3)
tesHep.del()



