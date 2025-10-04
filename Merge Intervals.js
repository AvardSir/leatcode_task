class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        intervals.sort((a, b) => a[0] - b[0])
        let NewInterval = intervals[0]

        let NewStart = NewInterval[0]
        let NewEnd = NewInterval[1]

        let res = []

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            let CurStart = interval[0]
            let CurEnd = interval[1]

            if (NewEnd < CurStart) {
                // add
                NewInterval = [NewStart, NewEnd]

                res.push(NewInterval)
                // newInter=cur
                NewInterval = interval
                NewStart = NewInterval[0]
                NewEnd = NewInterval[1]
            }
            else {

                // min 
                NewStart = Math.min(NewStart, CurStart)
                // max

                NewEnd = Math.max(NewEnd, CurEnd)
            }

        }

        NewInterval = [NewStart, NewEnd]

        res.push(NewInterval)

        return res
    }
}




let sol = new Solution()


intervals = [[1, 2], [2, 3]]

intervals = [[1, 4], [0, 0]]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.merge(intervals));