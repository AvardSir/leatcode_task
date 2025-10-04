class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        let NewStart = newInterval[0]
        let NewEnd = newInterval[1]

        let isAd = false

        let res = []
        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let CureStart = el[0]
            let CurEnd = el[1]


            if (CurEnd < NewStart) {
                // pass?
                res.push(el)
            }
            else if (NewEnd < CureStart) {
                // push new
                // new?
                newInterval = [NewStart, NewEnd]
                res.push(newInterval)
                res = [...res, ...intervals.slice(i)]
                isAd = true
                break
                // push curel
            }
            else {
                // min ->
                NewStart = Math.min(NewStart, CureStart)
                // max ->
                NewEnd = Math.max(NewEnd, CurEnd)
            }


        }

        // TODO: чо делать если NewStart NewEnd были найдены но не добавлены?
        if (!isAd) {
            newInterval = [NewStart, NewEnd]
            res.push(newInterval)
            // res.push
        }
        return res
    }
}




let sol = new Solution()

// intervals = [[1, 2], [3, 5], [9, 10]], newInterval = [6, 7]

// intervals = [[1, 3], [4, 6]]
// newInterval = [2, 5]

// intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
// newInterval = [4, 8]

// intervals = [[1, 3], [6, 9]]
// newInterval = [2, 5]

// intervals = [[1, 5]]
// newInterval = [0, 6]



intervals = [[2, 5], [6, 7], [8, 9]]
newInterval = [0, 1]

// sol.canAttendMeetings(intervals)
console.log('::: ', sol.insert(intervals, newInterval));