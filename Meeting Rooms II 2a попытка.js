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
        intervals.sort((a, b) => a.start - b.start)

        let ans = 0

        while (true) {
            console.log('intervals::: ', intervals);
            if (intervals.length == 0) {
                return ans
            }

            let PrevInter = intervals[0]

            let prevStart = PrevInter.start
            let prevEnd = PrevInter.end


            let CurInterIND = 0
            let curDay = new Set()
            // curDay.add(0)
            for (let i = 1; i < intervals.length; i++) {
                const curInter = intervals[i];

                let curStart = curInter.start
                let curEnd = curInter.end

                if (prevEnd > curStart) {
                    // pass
                    if (prevEnd > curEnd) {
                        PrevInter = curInter
                        prevStart = PrevInter.start
                        prevEnd = PrevInter.end
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
                    prevStart = PrevInter.start
                    prevEnd = PrevInter.end
                    CurInterIND = i
                    // console.log('CurInterIND::: ', CurInterIND);

                }


            }

            // TODO: тут не факт или доп условие надо 
            curDay.add(CurInterIND)
            // console.log('CurInterIND::: ', CurInterIND);
            ans++

            console.log('curDay::: ', curDay);

            intervals = intervals.filter((v, i) => !curDay.has(i))

            // сделай тут выход
        }
    }
}




class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

let sol = new Solution()


// intervals = [[1, 2], [2, 3]]

// intervals = [[1, 4], [0, 0]]

let intervals = [[0, 40], [5, 10], [15, 20]] // ✅ Правильное создание массива

// intervals = [(25, 579), (218, 918), (1281, 1307), (623, 1320), (685, 1353), (1308, 1358)]

intervals = [[25, 579], [218, 918], [1281, 1307], [623, 1320], [685, 1353], [1308, 1358]]
intervals = intervals.map((v, i) => new Interval(v[0], v[1]))

// let asf2=(1,2,3)

// sol.canAttendMeetings(intervals)
console.log('::: ', sol.minMeetingRooms(intervals));