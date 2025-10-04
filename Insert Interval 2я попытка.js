class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
    insert(intervals, newInterval) {
        let starNew = newInterval[0]
        let endNew = newInterval[1]


        let startInd = -Infinity
        let endInd = Infinity

        let start, end

        // for start
        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let startEl = el[0]
            let endEl = el[1]

            if (starNew <= startEl) {
                startInd = i
                start = Math.min(starNew, startEl)
                break
            }


        }


        // if не нашли start-> надо return newIn,Int
        if (startInd == -Infinity) {
            return [...intervals, newInterval]
        }

        // for end 
        for (let i = startInd; i < intervals.length; i++) {
            // const element = intervals[i];
            const el = intervals[i];
            let startEl = el[0]
            let endEl = el[1]
            
            if (endNew <= startEl) {
                endInd = i
                end = Math.min(endNew, startEl)
                break
            }

        }
        if (endInd == Infinity) {
            end = intervals[intervals.length - 1][1]
        }
        // return Int, [start,end=конец]
        newInterval = [start, end]

        return [...intervals.slice(0, startInd), newInterval, ...intervals.slice(endInd)]

        // TODO: там кажется все плохо с логикой надо проверить

    }
}




let sol = new Solution()

intervals = [[1, 2], [3, 5], [9, 10]], newInterval = [6, 7]

intervals = [[1, 3], [4, 6]]
newInterval = [2, 5]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.insert(intervals, newInterval));