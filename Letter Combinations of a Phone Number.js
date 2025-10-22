class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length==0) {
            return []
        }
        const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };


        let ans = []

        function dfs(curStr, j) {
            if (curStr.length == digits.length) {
                ans.push(curStr)
                return
            }
            for (let i = j; i < digits.length; i++) {
                const element = digits[i];

                let nubStr = digitToChar[Number(element)]
                // abc

                for (let z = 0; z < nubStr.length; z++) {
                    const elNubStr = nubStr[z];
                    // a
                    // curStr+a?
                    dfs(curStr + elNubStr, i + 1)

                }



                let cheack = 1

            }
        }
        let curStr = ''
        dfs(curStr, 0)

        return ans

    }
}


let sol = new Solution()


digits = "34"



console.log(' ::: ', sol.letterCombinations(digits));