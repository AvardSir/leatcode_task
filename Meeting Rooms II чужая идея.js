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

        let time = []
        for (let i = 0; i < intervals.length; i++) {
            const element = intervals[i];

            time.push([element.start, 'start'])
            time.push([element.end, 'end'])

        }
        // let sta='2'
        // sta
        time.sort((a, b) => a[1].charCodeAt()-b[1].charCodeAt()  )
        time.sort((a, b) => a[0] - b[0])


        let max = -Infinity
        let curDays = 0

        for (let i = 0; i < time.length; i++) {
            const curTime = time[i];
            if (curTime[1] == 'end') {
                curDays--
            }
            else {

                curDays++
                max = Math.max(max, curDays)
                if (max==6) {
                    let a1=2
                }
            }
        }
        if (max == -Infinity) {
            return 0
        }
        return max
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


// intervals=[(0,50),(10,60),(60,110),(70,120),(20,70),(30,80),(40,90),(50,100),(80,130),(90,140),(100,150)]
intervals = [[0, 50], [10, 60], [60, 110], [70, 120], [20, 70], [30, 80], [40, 90], [50, 100], [80, 130], [90, 140], [100, 150]]

intervals = intervals.map((v, i) => new Interval(v[0], v[1]))

console.log('::: ', sol.minMeetingRooms(intervals));