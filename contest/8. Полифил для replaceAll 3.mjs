
// Ваш полифил для метода replaceAll у строк

function replaceAll(searchValue, replaceValue) {
    let str = this
    searchValue = searchValue
    replaceValue = replaceValue

    function ReplaceAllSerch(str, whatNeddToReplace, ReplaceItem) {
        if (!whatNeddToReplace && !ReplaceItem) {
            return str
        }
        let strSymb = Symbol((Symbol.replace).toString())
        if (ReplaceItem == undefined) {

            return whatNeddToReplace[Symbol.replace](str)

        }

        // let prevStr = str

        // while (prevStr != str) {

        //     prevStr = str
        //     str = str.replace(whatNeddToReplace, ReplaceItem)

        // }
        let prevI = 0
        let ans = ''
        try {
            const matches = str.matchAll(whatNeddToReplace);


            for (const match of matches) {
                // console.log('match::: ', match);
                // console.log(`Совпадение: "${match[0]}", Группа: ${match[1]}, Индекс: ${match.index}`);

                let curMacth = match[0]
                curMacth = curMacth.replace(whatNeddToReplace, ReplaceItem)

                ans += str.slice(prevI, match.index) + curMacth

                prevI = match.index + match[0].length
                // debugger
            }

        } catch (error) {

            // String.prototype.matchAll called with a non-global RegExp argument
            // error.message
            // console.log('error.message::: ', error.message);

            if (error.message == 'String.prototype.matchAll called with a non-global RegExp argumen' || error.message == `String.prototype.matchAll called with a non-global RegExp argument`) {

                // throw new Error("TypeError: String.prototype.replaceAll called with a non-global RegExp argument");
                //  'TypeError: String.prototype.replaceAll called with a non-global RegExp argument'
                return ("TypeError: String.prototype.replaceAll called with a non-global RegExp argument");
                new Error("TypeError: String.prototype.replaceAll called with a non-global RegExp argument");
            }
            else {
                return error
            }
            // debugger
        }


        if (prevI < str.length) {
            ans += str.slice(prevI, str.length)
        }

        return ans

    }

    return ReplaceAllSerch(str, searchValue, replaceValue)

}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = replaceAll
}
String.prototype.replaceAll = replaceAll



// let testStr = 'Повар спрашивает повара: повар, какова твоя профессия?'.replaceAll('повар', 'программист');

// let testStr = 'Повар спрашивает повара: «Повар, какова твоя профессия?»'
//     .replaceAll(/(п)овар/gi, '$1рограммист');

// '<b>Экранирование</b> предотвращает XSS-атаки на сайтах'
//     .replaceAll(/([<>&'"])/g, (match) => `&#${match.charCodeAt(0)};`);

// let testStr = '<b>Экранирование</b> предотвращает XSS-атаки на сайтах'
//     .replaceAll(/([<>&'"])/g, (match) => `&#${match.charCodeAt(0)};`);
// let testStr = 'Смотря какой fabric, смотря сколько details'.replaceAll(/(как)ой fabric/, '$1ая ткань');

const censor = {
    blacklist: ['балбесы', 'олухи'],
    [Symbol.replace](str) {
        const pattern = new RegExp(this.blacklist.join('|'), 'gi');
        return str.replace(pattern, '******');
    }
};

let testStr = 'Меня окружают балбесы и олухи'.replaceAll(censor);
// console.log('::: Меня окружают балбесы и олухи');
// let testStr = 'Повар спрашивает повара: «Повар, какова твоя профессия?»'
//     .replaceAll(/(п)овар/gi, '$1рограммист');

console.log('::: ', testStr);