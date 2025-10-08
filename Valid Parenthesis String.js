class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        if (s.length == 1) {
            return false
        }
        // if (s.length % 2 != 0) {
        //     return false
        // }
        // console.log('s::: ', s.length);
        // console.log('s::: ', s);
        // s = '[' + s
        // let testar = []
        // for (let i = 0; i < 64; i++) {
        //     const element = i;

        //     testar.push(i % 10)


        //     // console.log('element::: ', element);

        // }
        // // testar = JSON.stringify(testar)
        // // let ar = []
        // // // ar.filter
        // // testar = testar.filter((v, i) => v != ',')
        // // console.log('s::: ', (testar));
        let queq = []
        // let
        let left = 0
        let right = 0
        let posibleLeftOrRight = 0

        let probablyRight = 0
        let probablyLeft = 0

        let i = 0
        while (i < s.length) {
            // s[i]
            if (s[i] == '(') {
                // ( нужно закрыватть в любом случае 
                left++

            }
            else if (s[i] == ')') {
                // console.log('s[i]::: ', s[i]);
                // console.log('i::: ', i);
                // console.log('s[i]::: ', s[i]);console.log('::: ', );
                if (left > 0) {
                    left--
                    if (probablyRight > 0) {
                        probablyRight--
                        probablyLeft++
                    }

                }
                else if (probablyLeft > 0) {

                    probablyLeft--
                    // posibleLeftOrRight--
                }
                else {
                    return false
                }
            }
            else if (s[i] == '*') {
                if (left > 0) {
                    // left--
                    probablyRight++
                    // posibleLeftOrRight--
                }
                else {
                    probablyLeft++
                }



            }

            i++
        }

        if (left  <= probablyRight) {
            left = 0
        }

        if (left > 0) {
            return false
        } {
            return true
        }
    }
}



const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let sol = new Solution()
s = "xyxxyzbzbbisl"

s = "(((*)"
s = "((**)"
s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"

// s = '(*))'

s = '((*)'
console.log('::: ', sol.checkValidString(s));