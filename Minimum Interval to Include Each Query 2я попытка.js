class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0])
        let ans = []
        for (let i = 0; i < queries.length; i++) {
            const query = queries[i];
            if (i==2) {
                let a=1
            }
            let min = Infinity
            for (let j = 0; j < intervals.length; j++) {
                const interval = intervals[j];

                let start = interval[0]
                let end = interval[1] //+1 мб тк включительно

                if (query < start) {
                    break
                }
                if (start <= query && query <= end) {
                    // тут 
                    let curDist = end - start + 1
                    min = Math.min(min, curDist)
                }

            }

            // нашли min
            if (min == Infinity) {
                ans.push(-1)
            }
            else {
                ans.push(min)

            }

        }

        return ans

    }
}




let sol = new Solution()

// intervals = intervals.map((v, i) => new Interval(v[0], v[1]))


intervals = [[1, 3], [2, 3], [3, 7], [6, 6]], queries = [2, 3, 1, 7, 6, 8]
// [4,3,-1,3,-1]

intervals = [[4, 5], [5, 8], [1, 9], [8, 10], [1, 6]]
queries = [7, 9, 3, 9, 3]

console.log('::: ', sol.minInterval(intervals, queries));