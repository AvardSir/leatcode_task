class ListNode {
    constructor(prev = null, next = null, val = null, key) {
        this.val = val
        this.key = key
        this.prev = prev
        this.next = next

    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.Map_Cashe = new Map()
        this.EndNode
        this.startNode
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // TODO: get проверь лол
        if (key == 1) {
            // console.log('key::: ', key);
            // console.log('this.Map_Cashe::: ', this.Map_Cashe);
        }

        // console.log('this.Map_Cashe.get(key)::: ', this.Map_Cashe.get(key));

        if (this.Map_Cashe.has(key)) {


            let ans
            let n3 = this.Map_Cashe.get(key)
            ans = n3.val
            if (n3 === this.startNode) {
                return ans
            }
            let n1 = this.startNode
            let n2 = n3.prev
            n3 = n3
            let n4 = n3.next

            // console.log('n4::: ', n4);
            if (n2 && n4) {
                n2.next = n4
                n4.prev = n2
                if (key == 1) {
                    // console.log(':n2 && n4: ', n4.prev = n2);
                    // console.log('n41111::: ', n4);
                    // console.log('n31111::: ', n3);

                }

            }
            else if (n2 && !n4) {

                n2.next = null
                this.EndNode = n2
            }
            if (key == 1 && 3 == n2.key) {
                console.log('Start 111', n2.key);

                console.log('n2::: ', n2.key);
                console.log('n3::: ', n3.key);

                if (n4) {
                    console.log('n4::: ', n4.key);

                }
                console.log('this.EndNode::: ', this.EndNode.key);
                console.log('this.startNode::: ', this.startNode.key);
                // // console.log('n3::: ', n3);


            }
            n3.next = n1

            n1.prev = n3

            n3.prev = null

            // console.log('n3::: ', n3.key);
            // this.startNode.prev

            this.startNode = n3 //эта нода
            if (n3.next && !n3.next.next) {
                this.EndNode=n3.next
            }
            // console.log('this.Map_Cashe::: ', this.Map_Cashe);
            // console.log('this.startNode::: ', this.startNode.key);
            // console.log('this.startNode.prev::: ', this.startNode.prev);
            if (key == 1 && 3 == n2.key) {
                console.log('Start 222  ', n2.key);

                console.log('n2::: ', n2.key);
                console.log('n3::: ', n3.key);

                if (n4) {
                    console.log('n4::: ', n4.key);

                }
                console.log('this.EndNode::: ', this.EndNode.key);
                console.log('this.startNode::: ', this.startNode.key);
                // // console.log('n3::: ', n3);


            }
            return ans
        }
        else {
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // TODO: проверить как работает сменаа мест когда только 2 
        // элемента
        let ans
        if (this.Map_Cashe.has(key)) {
            let n3 = this.Map_Cashe.get(key)

            n3.val = value
            if (n3 === this.startNode) {
                this.Map_Cashe.set(key, n3)
                return
            }
            let n1 = this.startNode
            let n2 = n3.prev
            n3 = n3
            let n4 = n3.next
            if (n2 && n4) {
                n2.next = n4
                n4.prev = n2

            }
            else if (n2 && !n4) {
                n2.next = null
                this.EndNode = n2
            }
            n3.next = n1
            n1.prev = n3

            n3.prev = null

            this.startNode = n3 //эта нода

            this.Map_Cashe.set(key, n3)
            return
        }
        else if (!this.Map_Cashe.has(key)) {
            let curNode = new ListNode()
            if (key == 4) {
                // console.log('key::: ', key);
                // console.log('this.EndNode::: ', this.EndNode.key);
                // console.log('this.startNode::: ', this.startNode.key);
                // console.log('this.Map_Cashe::: ', this.Map_Cashe);

            }
            // console.log('this.capacity > 0::: ', this.capacity > 0);

            if (this.capacity > 0) {
                if (!this.EndNode) {
                    this.EndNode = curNode
                    this.startNode = curNode
                }
                else {
                    let prevStart = this.startNode

                    this.startNode = curNode

                    curNode.next = prevStart
                    prevStart.prev = curNode
                }


                this.capacity--



                curNode.val = value
                curNode.key = key
                if (key == 2) {
                    // console.log('this.startNode::: ', this.startNode);

                }
                this.Map_Cashe.set(key, curNode)
                return
            }
            else {
                if (key == 4) {
                    // console.log('key::: ', key);
                    // console.log('this.EndNode::: ', this.EndNode.key);
                    // console.log('this.startNode::: ', this.startNode.key);
                    // console.log('this.Map_Cashe::: ', this.Map_Cashe);

                }
                // this.capacity <= 0

                let node_to_del = this.EndNode
                // console.log('node_to_del::: ', node_to_del);
                let lastStartNode = this.startNode

                curNode.next = lastStartNode
                lastStartNode.prev = curNode

                if (!node_to_del) {

                    this.EndNode = curNode
                }
                else {
                    this.EndNode = node_to_del.prev

                    let key_to_del = node_to_del.key
                    this.Map_Cashe.delete(key_to_del)
                    // console.log('key_to_del::: ', key_to_del);

                }


                this.startNode = curNode

                curNode.val = value
                curNode.key = key

                this.Map_Cashe.set(key, curNode)
                // if (key == 4 || key == 3) {

                if (key == 4) {
                    // console.log('key::: ', key);
                    // console.log('this.EndNode::: ', this.EndNode.key);
                    // console.log('this.startNode::: ', this.startNode.key);
                    // console.log('this.Map_Cashe::: ', this.Map_Cashe);

                }
                return
            }

        }

    }
}
