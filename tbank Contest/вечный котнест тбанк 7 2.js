function doTask(data) {
    const n = Number(data[0]);

    data = data[1]
    data = data.split(' ')
    data = data.filter(v => v != '')
    data = data.map(Number)

    let students = data
    students = students.map((v) => v - 1)

    let toFrom = new Map()
    let fromTo = new Map()

    let badAns = `-1 -1`
    let isOneInnerCycle = false
    let cycleIndex

    if (students.length == 0) {
        return badAns
    }
    if (n < 2) {
        return  badAnsF
        return [(students[0] + 1)].join('')
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        let from = i
        let to = student
        fromTo.set(from, to)

        if (!toFrom.has(to) && to != from) {
            toFrom.set(to, from)
        }
        else {
            if (isOneInnerCycle) {
                return badAns
            }
            else {
                isOneInnerCycle = true
                cycleIndex = to
            }
        }

    }
    if (!isOneInnerCycle) {
        return badAns
        students[0]++
        return [1, students[0]].join(' ')
    }

    if (cycleIndex === undefined) {
        return badAns
    }
    let curNode = cycleIndex
    let visited = new Set()

    visited.add(curNode)
    while (true) {
        from = curNode
        curNode = fromTo.get(from)
        if (visited.has(curNode)) {
            // from -то что искали
            break
        }
        visited.add(curNode)
    }
    let targetFrom = from

    let toCounter = 0
    let target
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        let from = i
        let to = student
        if (!toFrom.has(from)) {
            toCounter++
            if (toCounter > 1) {
                return badAns
            }
            target = from
        }

    }
    return [targetFrom + 1, target + 1].join(' ')

}

let testStr1 = `3
1  2  3`




testStr1 = `3
1  3  1`



testStr1 = `3
1  `


// testStr1 = `3
// 3  3  1`

// testStr1 = `3
// 2  3  1`


// testStr1 = `3
// 2 3 4 5 5`


// testStr1 = `3
// 2 2 3 4`




// testStr1 = `3
// 2 3 4 4`

// testAr = [2, 3, 4, 5, 6, 6]


// testStr1 = `3
// 2 3 4 5 6 6`


// function addTest(ar) {
//     return `3\n` + ar.join(' ')
// }

// testStr1 = addTest(testAr)


// testStr1 = addTest([2, 1, 2, 3])

// let ar =
//     [2, 1, 4, 5, 3]
// testStr1 = addTest(ar)



// ar =

//     [2, 2, 1]
// testStr1 = addTest(ar)





// ar =

//     [2, 2, 2, 3, 4, 5]
// testStr1 = addTest(ar)


// ar =

//     [2, 2, 2, 2, 4]


// testStr1 = addTest(ar)



// ar =

//     [2, 2, 2, 2, 4]


// testStr1 = addTest(ar)


// ar =

//     [2, 1]


// testStr1 = addTest(ar)

// testStr1 = `3\n` + `2 3 1 1`

console.log('::: ', doTask(testStr1.split('\n')));
