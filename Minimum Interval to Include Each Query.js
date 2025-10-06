class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        let mp = new Map()

        // key->val
        // int-> set ([val, interval])

        let valToInterval = new Map()

        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];

            if (!mp.has(interval[0])) {

                mp.set(interval[0], new Set())
            }
            mp.get(interval[0]).add(interval[1])

            if (!mp.has(interval[1])) {
                mp.set(interval[1], new Set())
            }
            mp.get(interval[1]).add(interval[0])

            let left = interval[0]
            let right = interval[1]

            let intervalll = right - left + 1

            valToInterval.set(left, intervalll)
            valToInterval.set(right, intervalll)


        }



        let ans = []

        for (let j = 0; j < queries.length; j++) {
            const query = queries[j];
            let i = 0
            let finQuert = new Set()
            // left
            let isEnd = false
            function subFun() {
                while (true) {

                    function right_left(i) {

                        if (mp.has(query - i)) {
                            let arr = Array.from(mp.get(query - i))

                            for (let z = 0; z < arr.length; z++) {
                                const element = arr[z];
                                if (finQuert.has(element)) {
                                    let val = valToInterval.get(element)
                                    ans.push(val)
                                    isEnd = true
                                    return
                                }
                            }



                            finQuert.add(query - i)
                        }
                    }

                    right_left(i)

                    // check

                    // righjt
                    right_left(-i)

                    // условие выхода 
                    if (isEnd) {
                        return
                    }
                    i++
                }
            }

            subFun()




        }
        return ans
        let pa1 = 1
    }
}






let sol = new Solution()

// intervals = intervals.map((v, i) => new Interval(v[0], v[1]))


intervals = [[1, 3], [2, 3], [3, 7], [6, 6]], queries = [2, 3, 1, 7, 6, 8]

console.log('::: ', sol.minInterval(intervals, queries));