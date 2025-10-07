class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        // x
        let x = target[0]
        let y = target[1]
        let z = target[2]


        let isX = false, isY = false, isZ = false
        for (let i = 0; i < triplets.length; i++) {

            const xI = triplets[i][0];
            const yI = triplets[i][1];
            const zI = triplets[i][2];

            if (xI == x && yI <= y && zI <= z) {
                isX = true
                break
            }

        }
        // y
        for (let i = 0; i < triplets.length; i++) {

            const xI = triplets[i][0];
            const yI = triplets[i][1];
            const zI = triplets[i][2];

            if (yI == y && xI <= x && zI <= z) {
                isY = true
                break
            }

        }
        // z
        for (let i = 0; i < triplets.length; i++) {

            const xI = triplets[i][0];
            const yI = triplets[i][1];
            const zI = triplets[i][2];

            if (zI == z && xI <= x && yI <= y) {
                isZ = true
                break
            }

        }

        if (isX && isY && isZ) {
            return true
        }
        else {
            return false
        }
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