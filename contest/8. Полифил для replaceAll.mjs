
// Ваш полифил для метода replaceAll у строк

function creatPolifilFunction(func) {
    if (!String.prototype.func) {
        String.prototype.replaceAll = func
    }
}
function replaceAll(searchValue, replaceValue) {
    let str = this
    searchValue = searchValue
    replaceValue = replaceValue

    if (str.search(searchValue) === -1) {
        return str;
    }
    // const str = "a1 b22 c333";
    // const searchValue = /\d+/g;
    // "1,2,3,4".replaceAll(/\d/g, "x");



    let prevInd = 0
    let ans = ''

    for (const match of str.matchAll(searchValue)) {
        // console.log(match[0], "позиция:", match.index);
        // console.log('match::: ', match);

        if (typeof replaceValue != 'function') {
            ans += str.slice(prevInd, match.index) + replaceValue

        }
        else {
            ans += str.slice(prevInd, match.index) + replaceValue(match)
        }


        prevInd = match.index + match[0].length


        // debugger
    }
    // str[prevInd]
    // console.log('str[prevInd]::: ', str[prevInd]);
    if (prevInd < str.length) {
        ans += str.slice(prevInd, str.length)
    }
    return ans
    // 1 позиция: 1
    // 22 позиция: 4
    // 333 позиция: 8

}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = replaceAll
}
String.prototype.replaceAll = replaceAll

let testStr = 'Повар спрашивает повара: повар, какова твоя профессия?'.replaceAll('повар', 'программист');

testStr = 'Повар спрашивает повара: «Повар, какова твоя профессия?»'
    .replaceAll(/(п)овар/gi, '$1рограммист');


testStr = '<b>Экранирование</b> предотвращает XSS-атаки на сайтах'
    .replaceAll(/([<>&'"])/g, (match) => `&#${match.charCodeAt(0)};`);

console.log('testStr::: ', testStr);