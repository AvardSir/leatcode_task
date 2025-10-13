module.exports = (str) => {

    let html = '';
    console.log('html::: ', html);
    //  Ваш код здесь

    // let html = ''

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

            let start = i
            let end = i
            while (j < str.length) {
                const elJ = str[j];

                if (elJ == '\n') {
                    end = j

                    html += '<li>' + str.slice(start + 2, end) + '</li>'

                    // start = i
                    j++
                    if (str[j] && str[j] == '*') {
                        start = j
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
};


// " <ul><li>test</li></ul>"
// < ul > <li>test</li></ul >
// * test
let str = `* test
* test
`

finalbosStr = `
= head

text ((https://ya.ru link)) text.

* item
* item
`

console.log(module.exports(str));

