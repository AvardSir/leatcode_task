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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start)
        // console.log('intervals::: ', intervals);

        function atendInter(inter1, inter2) {
            let start1 = inter1.start
            let end1 = inter1.end

            let start2 = inter2.start
            let end2 = inter2.end

            if (end1 <= start2 && start1 <= start2) {
                return true
            }
            else if (end2 <= start1 && start2 <= start1) {
                return true
            }
            else {
                return false
            }


        }
        for (let i = 0; i < intervals.length - 1; i++) {
            const el = intervals[i];
            const elNext = intervals[i + 1];


            if (!atendInter(el, elNext)) {
                return false
            }
        }
        return true
    }
}



let sol = new Solution()

intervals = [(5, 8), (9, 15)]

// sol.canAttendMeetings(intervals)
console.log('::: ', sol.canAttendMeetings(intervals));