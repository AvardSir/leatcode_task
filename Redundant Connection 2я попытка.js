class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
}
findRedundantConnection(edges) {


}
}



class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let sol = new Solution()


edges = [[1, 2], [1, 3], [3, 4], [2, 4]]
edges = [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]]


console.log(' ::: ', sol.findRedundantConnection(edges));