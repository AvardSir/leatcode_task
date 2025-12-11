

let lMap = new Map()

lMap.set('a', 1)
lMap.set('b', 2)
lMap.set('c', 1)


let rMap = new Map()

rMap.set('a', 2)
rMap.set('k', 1)

function compareLandR(Lmap, Rmap) {
    let arRmap = Array.from(Rmap)
    for (let i = 0; i < arRmap.length; i++) {
        const el = arRmap[i];
        let char = el[0]
        let count = el[1]

        if (count > Lmap.get(char)) {
            return false
        }


    }
    return true

    let chekl1 = 1
}


// compareLandR(Lmap, Rmap)
console.log('compareLandR(Lmap, Rmap)::: ', compareLandR(lMap, rMap));
// rMap.set('b', 2)
// rMap.set('c', 1)