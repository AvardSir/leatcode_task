class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (groupSize == 1) {
            return true
        }
        if (hand.length % groupSize != 0) {
            return false
        }

        hand.sort((a, b) => a - b)

        while (hand.length) {
            let prevNum = hand[0]

            let setToDel = new Set()
            setToDel.add(0)

            let curGropup = groupSize - 1
            let checkCopy = groupSize - 1
            for (let i = 1; i < hand.length; i++) {
                const handI = hand[i];
                if (prevNum == 3) {
                    let a2 = 2
                }
                if (handI != prevNum) {
                    if (handI - 1 == prevNum) {
                        // ok
                        setToDel.add(i)
                        prevNum = handI
                        curGropup--

                        checkCopy = groupSize - 1
                        if (curGropup == 0) {
                            break
                        }
                    }
                    else {
                        return false
                    }
                }
                else {
                    checkCopy--

                    if (checkCopy == 0 && groupSize == hand.length) {
                        return false
                    }
                }

                if (curGropup == 0) {
                    break
                }


            }
            // filter
            hand = hand.filter((v, i) => !setToDel.has(i))
            let pas = 1
        }
        return true

        let a = 1
    }
}

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


console.log('::: ', sol.isNStraightHand(hand, groupSize));