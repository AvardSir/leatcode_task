class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        if (s.length == 1) {
            return false
        }

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
                if (left > 0) {
                    left--
                }
                else if (posibleLeftOrRight > 0) {
                    posibleLeftOrRight--
                    // posibleLeftOrRight--
                }
                else {
                    return false
                }
            }
            else if (s[i] == '*') {
                posibleLeftOrRight++
            }
            i++
        }

        if (left <= posibleLeftOrRight) {
            left = 0
        }

        // left = 0
        right = 0
        posibleLeftOrRight = 0

        i = s.length - 1
        while (i >= 0) {
            // s[i]
            if (s[i] == '(') {
                // ( нужно закрыватть в любом случае 

                if (right > 0) {
                    right--
                }
                else if (posibleLeftOrRight > 0) {
                    posibleLeftOrRight--
                    // posibleLeftOrRight--
                }
                else {
                    return false
                }
            }
            else if (s[i] == ')') {
                right++

            }
            else if (s[i] == '*') {
                posibleLeftOrRight++
            }
            i--
        }

        if (right <= posibleLeftOrRight) {
            right = 0
        }

        if (left > 0 || right > 0) {
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

s = '(*))'

// s = '((*)'
// s = '())'
// s = "(()"


// s = "*)**)()"
// s = '****(('

// (((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())
// сводится к ****(( 

// TODO: идея крч слева направо проверить а затем проверить справо налево
console.log('::: ', sol.checkValidString(s));