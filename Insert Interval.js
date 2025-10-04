class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let starNew = newInterval[0]
        let endNew = newInterval[1]


        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let startCur = el[0]
            let endCur = el[1]

            if (startCur <= starNew && endNew <= endCur) {
                return intervals
            }
            if (starNew < startCur) {
                // нынешний старт это старт 


                случай когда 12 [3-8] внутри 3-8 3 интервала схлопнулось
            }
            // тут надо проход оформить
        }
    }
}




let sol = new Solution()

intervals = [(5, 8), (9, 15)]

// sol.canAttendMeetings(intervals)
console.log('::: ', sol.canAttendMeetings(intervals));