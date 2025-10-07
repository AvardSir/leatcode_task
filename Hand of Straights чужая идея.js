
class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize != 0) {
            return false
        }
        let mp = new Map()
        let minH = new MinPriorityQueue((i) => i)
        for (let i = 0; i < hand.length; i++) {
            const element = hand[i];
            if (!mp.has(element)) {
                mp.set(element, 1)
                minH.push(element)

            }
            else {
                mp.set(element, mp.get(element) + 1)
            }

        }

        while (minH.size()) {
            let firstEl
            while (minH.size() != 0) {

                if (mp.get(minH.front()) == 0) {
                    minH.pop()
                }
                else {
                    firstEl = minH.front()
                    break
                }
            }

            if (minH.size() == 0) {
                break
            }

            mp.set(firstEl, mp.get(firstEl) - 1)
            for (let i = 0; i < groupSize - 1; i++) {
                // const element = array[i];
                let nextEl = firstEl + 1
                if (!mp.has(nextEl) || mp.get(nextEl) == 0) {
                    return false
                }
                else {

                    firstEl = nextEl
                    mp.set(firstEl, mp.get(firstEl) - 1)

                }
            }


        }

        return true

        let chek = 1
    }
}


const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()

gas = [1, 2, 3, 4], cost = [2, 2, 4, 1]
gas = [1, 2, 3], cost = [2, 3, 2]
hand = [1, 2, 4, 2, 3, 5, 3, 4], groupSize = 4
hand = [5, 1]
groupSize = 1
hand = [8, 8, 9, 7, 7, 7, 6, 7, 10, 6]
groupSize = 2

hand = [1, 2, 3, 3, 4, 5, 6, 7]
groupSize = 4

hand = [1, 2, 4, 2, 3, 5, 3, 4]
groupSize = 4

console.log('::: ', sol.isNStraightHand(hand, groupSize));