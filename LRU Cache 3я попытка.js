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
        this.StartNode
    }

    // перемещине node в начало
    toStart(node) {
        if (node == this.StartNode) {
            return
        }
        else if (node == this.EndNode) {
            if (this.EndNode.prev) {
                this.EndNode = this.EndNode.prev
                this.EndNode.next = null

                node.prev = null
                node.next = null
            }
        }
        else {
            let prevCur = node.prev
            let nextCur = node.next

            prevCur.next = nextCur
            nextCur.prev = prevCur

        }
        node.next = this.StartNode
        this.StartNode.prev = node
        this.StartNode = this.StartNode.prev

        return
        // ПОМНИ: указатели <- есть и ->
        // ДОЛЖНО end.next=null start.prev=null
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.Map_Cashe.has(key)) {
            let node = this.Map_Cashe.get(key)
            let ans = node.val
            this.toStart(node)

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
        let node
        if (this.Map_Cashe.has(key)) {

            node = this.Map_Cashe.get(key)
            this.toStart(node)

        }
        else if (!this.Map_Cashe.has(key)) {
            node = new ListNode()
            node.key = key
            if (this.capacity > 0) {
                if (!this.EndNode && !this.StartNode) {
                    this.EndNode = node
                    this.StartNode = node

                }
                this.capacity--
            }
            else {
                // this.capacity<=0
                let node_to_del = this.EndNode
                if (this.EndNode.prev) {
                    this.EndNode = this.EndNode.prev
                    this.EndNode.next = null
                }
                this.Map_Cashe.delete(node_to_del.key)
                // console.log('node_to_del::: ', node_to_del);
            }
            node.next = this.StartNode
            this.StartNode.prev = node
            this.StartNode = this.StartNode.prev
        }
        node.val = value
        this.Map_Cashe.set(key, node)
        return

    }
}
