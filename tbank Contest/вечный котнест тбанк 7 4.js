function doTask(data) {
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

    let badAns = `-1 -1`
    let isOneInnerCycle = false
    let cycleIndex
    let potentialFromsIndexes = []

    // ищем potentialFromsIndexes который нужно изменить
    let serchingFrom
    for (let i = 0; i < githtsTos.length; i++) {
        const giftTo = githtsTos[i];
        let from = i
        let to = giftTo
        fromTo.set(from, to)

        if (!toFrom.has(to) && to != from) {
            toFrom.set(to, from)
        }
        else {
            if (isOneInnerCycle == true) {
                // есть два цикла 
                return badAns
            }

            isOneInnerCycle = true
            let prevTOval
            if (to == from) {
                serchingFrom = to
            }
            else {
                prevTOval = toFrom.get(to)
                potentialFromsIndexes.push(prevTOval)
                potentialFromsIndexes.push(from)
            }
        }

    }

    function checkCycle(start) {
        let visited = new Set()

        let curNode = start
        while (!visited.has(curNode)) {
            visited.add(curNode)
            curNode = fromTo.get(curNode)
        }
        return start == curNode
    }

    if (serchingFrom == undefined) {
        for (let i = 0; i < potentialFromsIndexes.length; i++) {
            const potentialFrom = potentialFromsIndexes[i];

            if (checkCycle(potentialFrom)) {
                serchingFrom = potentialFrom
                break
            }
        }
    }


    // todo сделать проверку полного цикла

    function checkCycle(start) {

        let visited = new Set()
        let curNode = start
        while (true) {
            if (!visited.has(curNode)) {
                visited.add(curNode)
                curNode = fromTo.get(curNode)
            }
            else {
                break
            }
        }

        return visited.size == githtsTos.length && curNode == start

    }

    if (checkCycle(0)) {
        return badAns
    }

    if (!isOneInnerCycle) {
        return badAns
    }

    // if (cycleIndex === undefined) {
    //     return badAns
    // }

    if (n == 1 || githtsTos.length == 1) {
        return badAns
    }
    // debugger


    // todo перепиши эту частьниже


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
    for (let i = 0; i < githtsTos.length; i++) {
        const student = githtsTos[i];
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
    if (serchingFrom == target) {
        return badAns
    }
    return [serchingFrom + 1, target + 1].join(' ')

}




let testStr1 = `3
1  2  3`




testStr1 = `3
3`



testStr1 = `3
1 1 3`


// testStr1 = `3
// 1 1 2    `


// testStr1 = `3
// 1 1 2`

// testStr1 = `3
// 2 3 1`

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
