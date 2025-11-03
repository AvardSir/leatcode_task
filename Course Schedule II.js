class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let ToFrom = new Map()

        for (let i = 0; i < prerequisites.length; i++) {
            const element = prerequisites[i];
            let l = element[0]
            let r = element[1]

            if (!ToFrom.has(l)) {
                ToFrom.set(l, [])
            }
            let curAr = ToFrom.get(l)
            curAr.push(r)

        }

        let visitedSet = new Set()
        let goodNodes = new Set()
        let ans=[]

        let isPosible = true
        function dfs(i) {

            if (goodNodes.has(i)) {
                return
            }
            if (!isPosible) {
                return
            }
            if (visitedSet.has(i)) {
                isPosible = false
                return
            }
            if (!ToFrom.has(i)) {
                ans.push(i)
                goodNodes.add(i)
                return
            }

            visitedSet.add(i)
            let arFrom = ToFrom.get(i)
            for (let i = 0; i < arFrom.length; i++) {
                const element = arFrom[i];
                dfs(element)
                if (!isPosible) {
                    return
                }
            }
            visitedSet.delete(i)
            ans.push(i)
            goodNodes.add(i)
            // godeNode set 
        }

        for (let i = 0; i < numCourses; i++) {
            const element = i;

            if (!goodNodes.has(i)) {
                visitedSet = new Set()
                dfs(i)
                if (!isPosible) {
                    return []
                }

            }

        }
        if (!isPosible) {
            return []
        }
        // TODO: проблема как сформировать ответ?
        return ans //TODO?



        let chek = 1
    }
}


class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()
numCourses = 2, prerequisites = [[0, 1]]

numCourses = 3, prerequisites = [[1,0]]
numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]]

console.log(' ::: ', sol.findOrder(numCourses, prerequisites));