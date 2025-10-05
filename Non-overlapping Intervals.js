class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0])

        let firts = intervals[0]
        let PrevStart = firts[0]
        let PrevEnd = firts[1]

        let ans = 0

        for (let i = 1; i < intervals.length; i++) {
            const element = intervals[i];
            let CurStart = element[0]
            let CurEnd = element[1]

            if (CurStart < PrevEnd) {
                ans++
                if (CurEnd > PrevEnd) {
                    // pass
                }
                else {
                    firts = element
                    PrevStart = firts[0]
                    PrevEnd = firts[1]
                }
            }
            else {
                firts = element
                PrevStart = firts[0]
                PrevEnd = firts[1]
            }

        }
        return ans
    }
}





let sol = new Solution()


intervals = [[1, 2], [2, 3]]

intervals = [[1, 4], [0, 0]]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.merge(intervals));