
// ## Шаблон решения

function makeTable(data, columns) {
    if (!columns || !columns.length) {
        return ''
    }
    let maxColumval = new Map()
    for (let i = 0; i < columns.length; i++) {
        const element = columns[i];
        maxColumval.set(element, element.length)
console.log('::: ', );
    }
    for (let i = 0; i < data.length; i++) {
        let dir = data[i];
        // let arDir = Array.from(dir)
        let arDir = Object.entries(dir);

        for (let j = 0; j < arDir.length; j++) {
            const element = arDir[j];
            let heder = element[0]
            let val = element[1]
            let hrhhr = 1
            let curMAforThisVal = maxColumval.get(heder)
            if (val && curMAforThisVal < val.length) {
                maxColumval.set(heder, val.length)
            }

        }



    }
    let ansStr = ``
    function betwenBlock() {
        // let curStr = ''
        for (let i = 0; i < columns.length; i++) {
            ansStr += '#'
            const element = columns[i];
            let cuvHeder = element
            let curSize = maxColumval.get(cuvHeder)

            for (let j = 0; j < curSize; j++) {
                // const element = array[j];

                ansStr += '='
            }


        }
        ansStr += '#\n'

        // return curStr
    }

    function contentSec() {

        for (let i = 0; i < data.length; i++) {
            const curDictStr = data[i];
            let arDir = Object.entries(curDictStr)

            // let dicSet = new Set(element)

            for (let z = 0; z < columns.length; z++) {
                ansStr += '|'
                const colum = columns[z];
                let curMax = maxColumval.get(colum)
                if (colum in curDictStr) {

                    let curWord = curDictStr[colum]


                    let hthht = 1

                    // console.log(ansStr);
                    try {
                        curWord.length
                    } catch (error) {
                        let htht = 1
                    }
                    if (curWord) {
                        ansStr += curWord
                        for (let iterator = 0; iterator < curMax - curWord.length; iterator++) {
                            // const element = array[iterator];
                            ansStr += ' '

                        }
                    }
                    else {
                        ansStr += '-'
                        for (let iterator = 0; iterator < curMax - 1; iterator++) {
                            // const element = array[iterator];
                            ansStr += ' '

                        }
                    }

                    // console.log(ansStr);
                    let tjtj = 2
                }
                else {
                    ansStr += '-'
                    for (let iterator = 0; iterator < curMax - 1; iterator++) {


                        // const element = array[iterator];
                        ansStr += ' '

                    }
                }

                let cuvHeder = colum

                // let curSize = maxColumval.get(cuvHeder)

                // for (let j = 0; j < curSize; j++) {
                //     // const element = array[j];

                //     ansStr += '='
                // }


            }
            ansStr += '|'
            ansStr += '\n'
            betwenBlock()
            let heheh = 1

        }





    }

    function headerBlock() {
        betwenBlock()
        for (let i = 0; i < columns.length; i++) {
            ansStr += '|'
            const colum = columns[i];
            let cuvHeder = colum
            let curSize = maxColumval.get(cuvHeder)
            ansStr += colum
            for (let j = 0; j < curSize - colum.length; j++) {
                // const element = array[j];

                ansStr += ' '
            }


        }
        ansStr += '|\n'
        betwenBlock()
    }

    headerBlock()
    contentSec()
    console.log(ansStr);
    // ansStr += block()
    let hehhe = 1
    // Ваш код
}
let data = [
    { headerName: "value" },
    { anotherHeader: null },
    { headerName: undefined, anotherHeader: "Very impressive value" },
]
let columns = ["headerName", "anotherHeader"]

console.log(makeTable(data, columns));
// module.exports = makeTable;

