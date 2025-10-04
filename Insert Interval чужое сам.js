class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        let newIntervalStart = newInterval[0]
        let newIntervalEnd = newInterval[1]

        let res = []
        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let CuretIntervalStart = el[0]
            let CuretIntervalEnd = el[1]


            if (newIntervalEnd < CuretIntervalStart) {
                res.push([newIntervalStart, newIntervalEnd])
                res = [...res, intervals.slice(i)]
                break

            }
            if (CuretIntervalEnd < newIntervalStart) {
                // cur< N
                res.push(el)
                continue
            }
            else {
                newIntervalStart = Math.min(CuretIntervalStart, newIntervalStart)
                newIntervalEnd = Math.min(CuretIntervalEnd, newIntervalEnd)
            }


        }


        return res
    }
}




let sol = new Solution()

intervals = [[1, 2], [3, 5], [9, 10]], newInterval = [6, 7]

// intervals = [[1, 3], [4, 6]]
// newInterval = [2, 5]

// intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
// newInterval = [4, 8]

// intervals = [[1, 3], [6, 9]]
// newInterval = [2, 5]

// intervals = [[1, 5]]
// newInterval = [0, 6]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.insert(intervals, newInterval));