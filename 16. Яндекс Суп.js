module.exports = function (mapString) {


    // TODO: сделай базовый случай 1 строка 
    // сделай случай с углом, чтобы в угле дырка была 

    // Ваш код
    let timeInSec

    // найти растояние если есть две точки

    mapString = mapString.split('\n')

    if (mapString.length < 3 || mapString[0].length < 3) {
        return 0
    }
    let holes = []
    let chars = []
    // цикл который находит все буквы 
    for (let i = 0; i < mapString.length; i++) {
        for (let j = 0; j < mapString[i].length; j++) {
            const element = mapString[i][j];
            if (element === ' ' || element === '\n') {

            }
            else if (!isNaN(element)) {
                // i j это кординаты дырки 
                holes.push([j, i, element])
            }
            else if (element == '-' || element == '+' || element == '|') {

            }
            else {
                // буква
                chars.push([j, i, element])
            }

        }
        // const element = mapString[i];

    }

// мб вариант примера надо четко решить 

    let pa1 = 1
    // мы получили буквы и дырки 
    // внутри цикла мы сравниваем все дырки с этой буквой находя самую ближнуюю дырку

    let maxTime = 0

    for (let i = 0; i < chars.length; i++) {
        const element = chars[i];
        let xChar = element[0]
        let yChar = element[1]

        let curMinDist = Infinity
        for (let j = 0; j < holes.length; j++) {
            const elHole = holes[j];
            let xHole = elHole[0]
            let yHole = elHole[1]

            x = Math.abs(xChar - xHole)
            y = Math.abs(yChar - yHole)

            if (x + y == 11) {
                let yo1 = 1
            }
            curMinDist = Math.min(curMinDist, x + y)
            if (curMinDist==10) {
                let af=1
            }
            let p1 = 1

        }
        maxTime = Math.max(maxTime, curMinDist)
        let p2 = 1

    }


    timeInSec = maxTime + 1

    return timeInSec; // Время в секундах, за которое все буквы вытекли
}
// 

data = [
    [1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1]
]

data = `+----------------0---------------+
|                                |
|                                |
|          U        D            |
|     L                          |
|              R                 |
|           L                    |
|  U                             1
3        U    D                  |
|         L              R       |
|                                |
+----------------2---------------+`


// data = `+----------------0---------------+
// +----------------2---------------+`


data =
`+-0-+
| I |
+---+`

// module.exports(data)
console.log('module.exports(data)::: ', module.exports(data));