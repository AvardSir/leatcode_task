
// Ваш полифил для метода replaceAll у строк

function replaceAll(searchValue, replaceValue) {
    let str = this
    searchValue = searchValue
    replaceValue = replaceValue

    function ReplaceAllSerch(str, whatNeddToReplace, ReplaceItem) {


        if (whatNeddToReplace instanceof RegExp) {
            // если регулярное выражение



            debugger
        }

        else {
            while (str.includes(whatNeddToReplace)) {
                // str.replace(whatNeddToReplace, ReplaceItem)

                str = str.replace(whatNeddToReplace, ReplaceItem)
            }
        }


        return str

    }

    return ReplaceAllSerch(str, searchValue, replaceValue)

}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = replaceAll
}
String.prototype.replaceAll = replaceAll

// let testStr = 'Повар спрашивает повара: повар, какова твоя профессия?'.replaceAll('повар', 'программист');

testStr = 'Повар спрашивает повара: «Повар, какова твоя профессия?»'
    .replaceAll(/(п)овар/gi, '$1рограммист');


// testStr = '<b>Экранирование</b> предотвращает XSS-атаки на сайтах'
//     .replaceAll(/([<>&'"])/g, (match) => `&#${match.charCodeAt(0)};`);

console.log('testStr::: ', testStr);