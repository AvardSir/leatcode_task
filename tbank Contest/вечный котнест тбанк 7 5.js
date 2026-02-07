function doTask(data) {
    // data = data.split('\n')
    const n = Number(data[0]);

    // превращаем дату в n,students
    data = data[1]
    data = data.split(' ')
    data = data.filter(v => v != '')
    data = data.map(Number)
    let githtsTos = data
    githtsTos = githtsTos.map((v) => v - 1)

    // иницилазация 
    let toFrom = new Map()
    let fromTo = new Map()

    let badAns = '-1 -1'

    if (githtsTos.length == 1) {
        return badAns
    }


    // заполнить toFrom fromTo
    for (let i = 0; i < githtsTos.length; i++) {
        const giftTo = githtsTos[i];

        let from = i
        let to = giftTo

        if (!toFrom.has(from)) {
            toFrom.set(from, [])
        }

        fromTo.set(from, to)

        if (!toFrom.has(to)) {
            toFrom.set(to, [from])
        }
        else {
            let curToAr = toFrom.get(to)
            if (curToAr.length + 1 > 2) {
                return badAns
            }
            curToAr.push(from)
            toFrom.set(to, curToAr)
            // debugger
        }
    }


    // проверка на корреккнтый цикл
    function checkCycle(start) {
        let visited = new Set()
        let len = githtsTos.length

        let curNode = start

        while (!visited.has(curNode)) {
            visited.add(curNode)
            curNode = fromTo.get(curNode)
        }

        return visited.size == len && start == curNode

    }
      
    if (checkCycle(0)) {
        return badAns
    }

    let serchFrom
    let serchTo


    for (let i = 0; i < githtsTos.length; i++) {
        const giftTo = githtsTos[i];

        let from = i
        let to = giftTo

        if (to == from) {
            serchFrom = from
            continue
        }

        let curToAr = toFrom.get(from)
        if (curToAr.length == 0) {
            if (serchTo == undefined) {
                serchTo = from
                continue
            }
            else {
                return badAns
            }
        }

        if (curToAr.length == 2) {
            if (serchFrom == undefined) {
                serchFrom = from
                continue
            }
            else {
                return badAns
            }
        }
        if (curToAr.length > 2) {
            return badAns
        }

    }


    function findFrom(serchFrom) {
        let arFrom = toFrom.get(serchFrom)

        function testCycle(start) {
            let curNode = start
            let visited = new Set()
            while (!visited.has(curNode)) {
                visited.add(curNode)
                curNode = fromTo.get(curNode)

            }
            return start === curNode
        }

        for (const testFron of arFrom) {
            if (testCycle(testFron)) {
                return testFron
            }
        }
        return badAns
        // debugger
    }



    if (serchFrom == undefined || serchTo == undefined) {
        return badAns
    }
    serchFrom = findFrom(serchFrom)

    return [serchFrom + 1, serchTo + 1].join(' ')
}



// console.log('::: ', doTask(testStr1.split('\n')));


let badAns = '-1 -1'

let testStr1 = `3
1  3  1`


class simpleTest {
    constructor() {
        this.counter = 1
    }
    test(func, data, rightAns) {
        let ans = func(data)
        if (ans === rightAns) {
            console.log(`Test ${this.counter++} OK::: `);
        }
        else {
            console.log(`Test ${this.counter++} WRONG::: `, '\n', data, '\n right ans\n ', rightAns, '\n this ans\n', ans, '\n\n');
        }
    }
}

let testObj = new simpleTest()

function makeStrToData(str) {
    return str.split('\n')
}
let righANS


// //
// testStr1 = `1
// 1 3 1`
// righANS = '1 2'
// testStr1 = makeStrToData(testStr1)

// testObj.test(doTask, testStr1, righANS)
// //


// //
// testStr1 = `1
// 1 2 3`
// righANS = badAns
// testStr1 = makeStrToData(testStr1)

// testObj.test(doTask, testStr1, righANS)
// //



//
testStr1 = `1
2 1`
righANS = badAns

testStr1 = makeStrToData(testStr1)
testObj.test(doTask, testStr1, righANS)
//


