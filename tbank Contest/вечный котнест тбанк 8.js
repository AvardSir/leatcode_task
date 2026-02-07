function doTask(data) {
    let roomCords = data[0]
    function cleanData(str) {
        str = str.split(' ')
        str = str.filter((v) => v != '')
        str = str.map(Number)
        return str
    }
    roomCords = cleanData(roomCords)
    let [xRoom, yRoom] = roomCords
    let planCords = data[1]
    planCords = cleanData(planCords)
    //  (0 0)
    let [leftDownX, leftDownY] = [planCords[0], planCords[1]]

    // (X 0)
    let [rightDownX, rightDownY] = [planCords[2], planCords[3]]

    // (X Y)
    let [upRightX, upRightY] = [planCords[4], planCords[5]]

    // (0,Y)
    let [leftRightX, leftRightY] = [planCords[6], planCords[7]]

    // debugger
}


let testStr1

testStr1 = `10  5
3.0  2.5  1.0  2.5  1.0  1.5  3.0  1.5`
console.log('::: ', doTask(testStr1.split('\n')));

