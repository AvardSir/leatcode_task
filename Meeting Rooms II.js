/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {



        let dats = []
        intervals.sort((a, b) => a[0] - b[0])

        let ans = 0

        while (true) {
            if (intervals.length == 0) {
                return ans
            }

            let PrevInter = intervals[0]

            let prevStart = PrevInter[0]
            let prevEnd = PrevInter[1]


            let CurInterIND = 0
            let curDay = new Set()
            // curDay.add(0)
            for (let i = 1; i < intervals.length; i++) {
                const curInter = intervals[i];

                let curStart = curInter[0]
                let curEnd = curInter[1]

                if (prevEnd > curStart) {
                    // pass
                    if (prevEnd > curEnd) {
                        PrevInter = curInter
                        CurInterIND = i
                        // curDay.add(i)
                    }
                    else {
                        // curDay.add(CurInterIND)
                    }
                }
                else {
                    curDay.add(CurInterIND)
                    PrevInter = curInter
                    CurInterIND = i

                }


            }

            // TODO: тут не факт или доп условие надо 
            curDay.add(CurInterIND)
            ans++

            intervals = intervals.filter((v, i) => !curDay.has(i))
            // сделай тут выход
        }
    }
}




let sol = new Solution()


// intervals = [[1, 2], [2, 3]]

// intervals = [[1, 4], [0, 0]]

intervals = [(0, 40), (5, 10), (15, 20)]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.minMeetingRooms(intervals));