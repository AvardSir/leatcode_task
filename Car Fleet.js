class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (position.length == 0) {
            return 0

        }
        let stack = []


        let al_in = []

        for (let i = 0; i < position.length; i++) {
            al_in.push([position[i], speed[i]])
        }

        al_in = al_in.sort((a, b) => a[0] - b[0])

        let i_ = position.length - 1
        let t = (target - al_in[i_][0]) / al_in[i_][1]
        stack.push(t)
        for (let i = position.length - 2; i >= 0; i--) {
            const element = position[i];

            t = (target - al_in[i][0]) / al_in[i][1]
            if (t <= stack[stack.length - 1]) {
                // вариант когда время будущее больше предыдущего
                // т.е.
                // тот кто сзади догонит
                continue
            }
            else {
                stack.push(t)
            }



        }

        return stack.length

    }
}




// оно работате
a = new Solution()
// 

target = 10, position = [1, 4], speed = [3, 2]
target = 10, position = [4, 1, 0, 7], speed = [2, 2, 1, 1]
target = 10
position = [0, 4, 2]
speed = [2, 1, 3]

target=10
position=[1,4]
speed=[3,2]

console.log('a.productExceptSelf(tescae1)::: ', a.carFleet(target, position, speed));

