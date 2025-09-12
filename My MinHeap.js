


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
        // this.heap = [1, 2, 3]

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
            if (r_ind >= h.length && (l <= v)) {
                let pas = 1
                let temp = h[l_ind]
                h[l_ind] = h[i]
                h[i] = temp
                i = l_ind

            }
            else if (r_ind >= h.length && (r <= v)) {
                let temp = h[r_ind]
                h[r_ind] = h[i]
                h[i] = temp
                i = r_ind

            }
            else if ((l <= v || r <= v)) {
                // console.log('r::: ', r);
                // console.log('l::: ', l);
                if (l < r) {

                    // [l, v] = [v, l]
                    // меняем местами

                    [h[i], h[l_ind]] = [h[l_ind], h[i]]

                    i = l_ind
                    // допиши сдесь
                }
                else {
                    // допиши туту
                    [h[i], h[r_ind]] = [h[r_ind], h[i]]

                    i = r_ind
                }
            }
            else {
                break
            }
        }
        return this.heap
        // let pas = 1
        // вроде сделал del add 
        // добавь в задачу
    }
}




class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {


        // вроде сортировка 4 3 2 1 а не 1 2 3 4 
        this.k = k
        this.heap = new MyMinHeap()
        // console.log('this.k::: ', this.k);

        if (nums.length == 0) {
            return
        }
        // console.log('this.k::: ', this.k);

        nums.sort((a, b) => b - a)
        let h = this.heap
        // console.log('this.heap::: ', this.heap);
        for (let i = 0; i < k; i++) {
            if (i == nums.length) {
                break
            }
            h.add(nums[i])
            // console.log('nums[i]::: ', nums[i]);
            // const element = array[i];

        }

        this.k = this.k - nums.length
        // console.log('this.k::: ', this.k);
        // console.log('this.heap:constructor:: ', this.heap);

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // console.log('this.222heap::: ');

        if (this.k > 0) {
            this.heap.add(val)
            this.k--
        }
        else if (this.heap.heap[0] < val) {
            // console.log('BEFOR this.heap::: ', this.heap);

            this.heap.add(val)
            // console.log('add this.heap::: ', this.heap.heap);
            this.heap.del()
            // console.log('del this.heap::: ', this.heap.heap);


        }
        return this.heap.heap[0]

    }
}

// let tes = new KthLargest(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

// tes.add(11)

// // tes.del()



let tes = new KthLargest(2, [1, 1, 1, 1, 1, 1])
// где в add добавляет андифинид
tes.add(1)
tes.add(2)
tes.add(2)
tes.add(2)
console.log('tes::: ', tes);