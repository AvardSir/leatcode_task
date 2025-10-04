class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if (intervals.length == 0) {
            return [newInterval]
        }
        if (newInterval.length == 0) {
            return intervals
        }
        let NS = newInterval[0]
        let NE = newInterval[1]


        let startInd = -Infinity
        let endInd = Infinity

        let start, end

        if (NE < intervals[0][0]) {
            return [newInterval, ...intervals]
        }

        if (intervals[intervals.length - 1][1] < NS) {
            return [...intervals, newInterval]
        }

        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let startEl = el[0]
            let endEl = el[1]

            if (startEl < NS && NE < endEl) {
                return intervals
            }
        }

        // for start
        for (let i = 0; i < intervals.length; i++) {
            const el = intervals[i];
            let CS = el[0]
            let CE = el[1]

            if (NS <= CS && NE <= CE && CS <= NE || NS >= CS && NE >= CE && CE >= NS) {
                // TODO: точно end Ind и End можно так? 

                startInd = i
                // endInd = i
                start = Math.min(el[0], newInterval[0])
                end = Math.max(el[1], newInterval[1])
                break
            }
            else if (NE < CS) {
                startInd = i
                endInd = i
                // newInterval = [start, end]
                return [...intervals.slice(0, startInd), newInterval, ...intervals.slice(endInd)]
            }
        }

        if (startInd == -Infinity) {
            start = newInterval[0]

            end = Math.max(newInterval[1], intervals[intervals.length - 1][1])
            newInterval = [start, end]
            return [newInterval]
        }
        
        // for end
        for (let i = startInd + 1; i < intervals.length; i++) {
            const el = intervals[i];
            let CS = el[0]
            let CE = el[1]

            if (NE <= CE && NE >= CS) {
                // тут как бы NE>CS
                if (NE > CS) {
                    // end = Math.max(CE, NE)


                    endInd = i + 1
                }
                else {
                    endInd = i + 1
                }
                end = Math.max(CE, NE)

                break

                // endInd
            }
        }
        
        if (endInd == Infinity) {
            endInd = startInd + 1
            // ?
            // TODO: бесконечный индекс лол 
        }
        newInterval = [start, end]
        return [...intervals.slice(0, startInd), newInterval, ...intervals.slice(endInd)]


    }
}




let sol = new Solution()

intervals = [[1, 2], [3, 5], [9, 10]], newInterval = [6, 7]

intervals = [[1, 3], [4, 6]]
newInterval = [2, 5]

intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
newInterval = [4, 8]

intervals = [[1, 3], [6, 9]]
newInterval = [2, 5]

intervals = [[1, 5]]
newInterval = [0, 6]


// sol.canAttendMeetings(intervals)
console.log('::: ', sol.insert(intervals, newInterval));