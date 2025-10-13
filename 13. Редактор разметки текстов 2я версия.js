module.exports = (str) => {

    let html = '';
    console.log('html::: ', html);
    //  Ваш код здесь
    // пробелы лишние убрать 

    // '  ' to ' ' 
    // '\n\n' to '\n'
    // ' \n' to '\n'
    // let html = ''

    // while (str.includes('/n/n')) {
    //     str = str.replace('/n/n', '/n')
    // }

    // let whatReplace = '/n/n'
    // let toReplace = '/n'

    // replaceFromTo('\n\n', '\n');
    replaceFromTo('  ', ' ');
    // replaceFromTo(' \n', '\n');
    str
    let i = 0
    while (i < str.length) {
        const element = str[i];


        // <a href="https://ya.ru">link</a> 
        // text ((https://ya.ru link)) text.


        // = head
        // <h1>head</h1>


        if (element == '*') {
            // делим 
            html += '<ul>'
            let j = i

            let startUl = i
            let endUL = i

            let startLi = i
            let endLi = i

            while (j < str.length) {
                const elJ = str[j];

                if (elJ == '\n') {
                    // endUL = j
                    endLi = j
                    html += '<li>' + str.slice(startLi + 2, endLi) + '</li>'

                    startUl = j
                    break
                    // start = i
                    j++
                    if (str[j] && str[j] == '*') {
                        startUl = j
                    }
                    else {
                        i = j
                        break
                    }


                }
                j++

            }

            html += '</ul>'
        }
        i++
    }
    // html = '44442'
    return html;

    function replaceFromTo(from, to) {
        while (str.includes(from)) {
            str = str.replace(from, to);
        }
    }
};


// " <ul><li>test</li></ul>"
// < ul > <li>test</li></ul >
// * test
finalbosStr = `
= head
text ((https://ya.ru link)) text.

* item
* item
`
let str = `* test        
* test
`


"
    * test

"
console.log(module.exports(str));

