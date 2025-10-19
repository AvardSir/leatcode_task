class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a, b) => a - b)

        // случай 112  крч нужно вернуть [1] и [2]
        // тоесть надо сначало добавить 1 потом скипнуть варианты с 1, т.е.
        // копиями

        let ans = []


        let prev = [1, 2, 3]
        let i = 0
        // arOfNun = nums

        // let ar2 = [1, 2]
        // ar2.length
        function dfs(prev, post, j) {

            ans.push(post)
            if (prev.length == 0) {
                return
            }
            // туту остановился

            let i = j

            while (i < prev.length) {

                // 
                // prev.slice(0, i)

                let nextPrev = [...prev.slice(0, i), ...prev.slice(i + 1)]

                let nextPost = [...post, prev[i]]
                // TODO: тут остановился 

                dfs(nextPrev, nextPost, i)


                // функционал после досле перехода из start в curPath

                let PrevIel = prev[i]
                // ar[i]
                // ans.push(prev[i])
                i++
                let CurIel = prev[i]


                while (CurIel && PrevIel == CurIel) {

                    i++

                    CurIel = prev[i]


                }

                // нашли не похожий элемент 

            }

        }

        dfs([...nums], [], 0)

        // TODO: добавить i и чтобы с него начинался проход по nums

        // сейчас добавляет 112 и 211

        return ans
    }
}


// subsetsWithDup(nums)

let sol = new Solution()

nums = [1, 2, 1]

console.log(' ::: ', sol.subsetsWithDup(nums));