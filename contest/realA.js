function makeTable(data, columns) {
    if (!columns || columns.length == 0) {
        return ''
    }
    let maxSizeForColum = new Map()
    for (let i = 0; i < columns.length; i++) {
        const element = columns[i];

        maxSizeForColum.set(element, element.length)
    }
    for (let index = 0; index < data.length; index++) {
        const dir = data[index];
        for (const key in dir) {
            let val = dir[key];
            if (val) {
                val = String(val)
                maxSizeForColum.set(key, Math.max(maxSizeForColum.get(key), val.length))
            }

        }

    }

    let colSizes = []
    for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        colSizes.push([maxSizeForColum.get(col), col])
    }

    let ans = []

    function between() {
        let curStr = ''
        for (let i = 0; i < colSizes.length; i++) {
            curStr += '#'
            const node = colSizes[i];
            let size = node[0]
            curStr += '='.repeat(size)
        }
        curStr += '#'
        ans.push(curStr)
    }
    function dataPrint(str) {
        let curStr = ''
        for (let j = 0; j < colSizes.length; j++) {

            curStr += '|'
            const curnode = colSizes[j];
            let curSize = curnode[0]
            let curName = curnode[1]

            if (curName in str && str[curName] !== null && str[curName] !== undefined) {

                // console.log('str[curName]::: ', str[curName]);
                // let valChek = str[curName]
                // let sttuChek = String(str[curName]);        
                str[curName] = String(str[curName])
                curStr += str[curName] + ' '.repeat(curSize - str[curName].length)
                let thht = 1
            }
            else {
                curStr += '-' + ' '.repeat(curSize - 1)
            }
        }
        curStr += '|'
        ans.push(curStr)
    }

    function header() {
        let curStr = ''
        for (let j = 0; j < colSizes.length; j++) {
            curStr += '|'
            const curnode = colSizes[j];
            let curSize = curnode[0]
            let curName = curnode[1]
            curStr += curName + ' '.repeat(curSize - curName.length)
        }
        curStr += '|'
        ans.push(curStr)
    }

    between()
    header()

    for (let i = 0; i < data.length; i++) {
        between()
        const str = data[i];
        dataPrint(str)

    }
    between()

    ans = ans.join('\n')
    return ans
}

module.exports = makeTable;

let data = [
    { headerName: 23 },
    { anotherHeader: null },
    { headerName: undefined, anotherHeader: "Very impressive value" },
]
let columns = ["headerName", "anotherHeader"]


// makeTable(data, columns) 
console.log(makeTable(data, columns));