// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) {
            return null
        }
        let h = head
        let h_copy = new Node()
        let h_copy_start = h_copy
        let map_head = new Map()
        while (h) {

            h_copy.val = h.val
            if (!map_head.has(h)) {
                // console.log('h::: ', h.val);
                // console.log('fafs')
                map_head.set(h, h_copy)
            }

            // h_copy.random
            if (h.random !== null) {
                if (map_head.has(h.random)) {

                    h_copy.random = map_head.get(h.random)
                }
                else {
                    map_head.set(h.random, new Node())
                    // map_head.add(h.random)
                    h_copy.random = map_head.get(h.random)
                }
            }


            if (!h.next) {
                break
                // h_copy.val = h.val
            }

            // h_copy.next
            if (map_head.has(h.next)) {

                h_copy.next = map_head.get(h.next)
            }
            else {
                map_head.set(h.next, new Node())
                // map_head.add(h.random)
                h_copy.next = map_head.get(h.next)
            }



            h = h.next
            h_copy = h_copy.next

        }

        // console.log('map_head::: ', map_head);

        return h_copy_start
    }
}
