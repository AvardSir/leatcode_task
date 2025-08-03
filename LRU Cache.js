class NodeList {
    constructor(prev = null, val = 0, next = null) {

        this.prev = prev
        this.val = val
        this.usage = 1
        this.next = next
        this.key = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map_cashe = new Map()
        this.start_ListNode = null
    }


    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map_cashe.has(key)) {
            return -1
        }
        // console.log('key::: ', key);

        // console.log('this.map_cashe::: ', this.map_cashe);


        let n2 = this.map_cashe.get(key)
        let ans = n2.val

        n2.usage++
        if (!n2.next) {
            return ans
        }
        if (n2.next.usage < n2.usage) {

            let n1 = n2.prev
            let n3 = n2.next


            if (n1 !== null) {
                n1.next = n3
                n2.prev = n3
                // n2.prev = n2.next
            }
            if (!n2.next.next) {
                n3.next = n2
                n2.prev = n3
                // let n4 = n2.next.next
            }
            let n4 = n2.next.next

            while (true) {
                if (!n2.next) {
                    break
                }
                if (n3.usage >= n2.usage) {
                    break
                }

                // 1 - 2 - 3 - 4 было
                // 1 - 3 - 2 - 4 стало

                n1 = n2.prev
                n2 = n2
                n3 = n2.next

                n1.next = n3
                n3.prev = n1

                n2.prev = n3

                if (!n2.next.next) {
                    // случай (без 3)
                    // 1 - 2
                    n2.next = null
                    // node_1.next = null
                    break
                    // n2 3 нет
                }
                n4 = n2.next.next

                n2.next = n4
                n4.prev = n2

            }
        }



        // метод get возвращает значение
        return ans
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map_cashe.has(key)) {
            let node = this.map_cashe.get(key)
            node.val = value
            node.usage++

            if (node.next.usage < node.usage) {
                if (!node.prev !== null) {
                    node.prev.next = node.next
                    node.prev = node.next
                }
                while (true) {
                    if (!node.next) {
                        break
                    }
                    if (node.next.usage >= node.usage) {
                        break
                    }

                    // 1 - 2 - 3 было
                    // 2 - 1 - 3 стало
                    let node_1 = node
                    let node_2 = node.next

                    node_2.prev = node_1.prev

                    node_2.next = node_1
                    node_1.prev = node_2

                    if (!node.next.next) {
                        // случай (без 3)
                        // 1 - 2
                        node_1.next = null
                        break
                        // node 3 нет
                    }
                    let node_3 = node.next.next

                    node_1.next = node_3 //
                    node_3.prev = node_1

                    node = node_1
                }
            }

            // this.map_cashe.set(key)
            return
        }
        else {
            // !this.map_cashe.has(key)

            if (this.capacity > 0) {
                let vall = new NodeList()
                if (!this.start_ListNode) {
                    this.start_ListNode = vall
                }
                else {
                    vall.next = this.start_ListNode
                    this.start_ListNode.prev = vall

                    this.start_ListNode = vall


                }


                vall.val = value
                vall.key = key

                this.map_cashe.set(key, vall)

                this.capacity--
                return
            }
            else if (this.capacity <= 0) {
                // capacity <= 0
                let n1 = new NodeList()

                let n2 = this.start_ListNode
                let n3 = this.start_ListNode.next

                n1.next = n3
                n3.prev = n1
                n1.val = value
                this.start_ListNode = n1
                // console.log('key, value::: ', key, value);
                // console.log('this.map_cashe map_cashe.delete::: ', this.map_cashe);

                // this.map_cashe.has(n2)
                // TODO: this.map_cashe.delete(n2) чтоб работал
                // console.log('this.map_cashe.has()::: ', this.map_cashe.has(n2.key));
                this.map_cashe.set(key, n1)
                this.map_cashe.delete(n2.key)
                console.log('n1::: ', n1);
                // console.log('n2::: ', n2);
                console.log('this.map_cashe map_cashe.delete::: ', this.map_cashe);



                this.map_cashe.set(key, n1)
                // записать значение
            }

        }


    }
}