function solution(root) {
    let ans = {}
    function dfs(curDir, prevPath) {

        for (const key in curDir) {
            const childDir = curDir[key];
            if (typeof childDir === 'function') {
                let finPath = [...prevPath, key]
                let strFinPath = finPath.join('.')
                ans[strFinPath] = (...args) => childDir(strFinPath,...args);

            }
            else {
                dfs(childDir, [...prevPath, key])
            }

        }
    }

    dfs(root, [])
    return ans
}
module.exports = solution;
