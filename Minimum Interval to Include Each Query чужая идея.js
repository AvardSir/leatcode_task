

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0])
        let iToVal = new Map()
        for (let i = 0; i < queries.length; i++) {
            const element = queries[i];
            iToVal.set(i, element)
        }
        queries.sort((a, b) => a - b)
        // TODO: огромная проблема очередности ответа
        // для работы надо чтоб queryes были сортированы
        // а ответ возвращаем без сортировки 

        // план: словарь valToDist
        // indToVal

        let minH = new MinPriorityQueue((entry) => entry[0])
        // [val, End]

        let ans = []
        let j = 0



        let valToDist = new Map()

        for (let i = 0; i < queries.length; i++) {
            const query = queries[i];

            if (query == 6) {
                let a = 1
            }

            while (true) {

                if (j == intervals.length) {
                    break
                }

                const interval = intervals[j];

                let start = interval[0]
                let end = interval[1]



                if (query < start) {
                    // ans
                    // console.log('minH.size()::: ', minH.size());

                    if (minH.size() == 0) {
                        valToDist.set(query, -1)
                        ans.push(-1)

                    }
                    else {

                        while (true) {
                            // console.log('minH.front()::: ', minH.front());
                            if (minH.size() == 0) {
                                valToDist.set(query, -1)
                                ans.push(-1)
                                break
                            }
                            let curDist = minH.front()[0]

                            let curEnd = minH.front()[1]

                            if (curEnd < query) {
                                minH.pop()
                            }
                            else {
                                valToDist.set(query, curDist)
                                ans.push(curDist)
                                break
                            }
                        }


                    }
                    break

                }

                // minH.push 
                let dist = end - start + 1
                minH.push([dist, end])

                j++
            }

            if (j == intervals.length && minH.size() != null) {

                while (true) {
                    if (minH.size() == 0) {
                        valToDist.set(query, -1)
                        ans.push(-1)
                        break
                    }
                    // console.log('minH.front()::: ', minH.front());
                    // minH.front()
                    if (minH.front() == null) {
                        minH.size()
                        console.log('minH.size()::: ', minH.size());
                        let a23 = 2
                    }
                    console.log('minH.front()::: ', minH.front());
                    let curDist = minH.front()[0]

                    let curEnd = minH.front()[1]

                    if (curEnd < query) {
                        minH.pop()
                    }
                    
                    else {
                        valToDist.set(query, curDist)
                        ans.push(curDist)
                        break
                    }
                }
            }

        }

        let ansTry2 = []

        for (let i = 0; i < queries.length; i++) {
            // const element = queries[i];
            // for i  i->val val->Dist +ans.push()
            let curVal = iToVal.get(i)

            let curDist = valToDist.get(curVal)

            ansTry2.push(curDist)
        }

        return ansTry2
    }
}




const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let sol = new Solution()

// intervals = intervals.map((v, i) => new Interval(v[0], v[1]))


intervals = [[1, 3], [2, 3], [3, 7], [6, 6]], queries = [2, 3, 1, 7, 6, 8]
// [4,3,-1,3,-1]

// intervals = [[4, 5], [5, 8], [1, 9], [8, 10], [1, 6]]
// queries = [7, 9, 3, 9, 3]

intervals = [[1, 3], [2, 3], [3, 7], [6, 6]]
queries = [2, 3, 1, 7, 6, 8]

intervals = [[2, 3], [2, 5], [1, 8], [20, 25]]
queries = [2, 19, 5, 22]

console.log('::: ', sol.minInterval(intervals, queries));