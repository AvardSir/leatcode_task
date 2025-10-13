module.exports = (str) => {

    let html = '';
    // console.log('html::: ', html);
    replaceFromTo('  ', ' ');
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
            let star = i

            let startUl = i
            let endUL = i

            let startLi = i
            let endLi = i

            while (star < str.length) {
                const elJ = str[star];

                if (elJ == '\n') {
                    // endUL = j
                    endLi = star
                    html += '<li>' + str.slice(startLi + 2, endLi) + '</li>'

                    startUl = star

                    star++
                    if (str[star] && str[star] == '\n') {
                        break
                    }

                    let pas114 = str[star]
                    // start = i
                    if (str[star] && str[star] == '*') {
                        star += 3

                        startLi = star
                        let a = str[star + 3]

                        let paas = 1
                    }
                    else {

                        break
                    }


                }
                star++

            }
            i = star
            html += '</ul>'
        }
        else if (element == '=') {
            i += 2
            let h = i
            let startHead = h

            while (true) {
                if (h > str.length) {
                    break
                }

                let hEl = str[h]

                if (hEl == '\n') {
                    let endHead = h
                    html += '<h1>' + str.slice(startHead, endHead) + '</h1>'

                    // i = h
                    break
                }
                // найти коне строки

                h++
            }
            i = h
        }
        else if (element == '(' && str[i + 1] && str[i + 1] == '(') {

            let scobe = i

            i = scobes(i)
            html
            // str[i + 1] == '('F

            // (( сылки))

            {/* <p>text <a href="https://ya.ru">link</a> text.</p>

            <h1>head</h1><p>text <a href="https://ya.ru">link</a> text.</p><ul><li>item</li><li>item</li></ul> */}
        }
        else if (element == ' ' || element == '\n') {
            // console.log('i::: ', i);
        }
        else {
            html += '<p>'
            let j = i

            let p = i
            while (p < str.length) {
                let pEl = str[p]
                if (str[p] == '(' && str[p + 1] && str[p + 1] == '(') {
                    let scobe = p + 2
                    p = scobes(p)
                }
                else if (pEl == '\n') {
                    break
                }
                else {
                    html += pEl
                }
                p++
            }

            i = p + 1

            html += '</p>'


        }

        i++
    }
    return html;

    function scobes(startScobe) {
        startScobe++
        let workStr = ''
        let z = startScobe
        let endScobe

        let startTextLink
        while (true) {
            if (str[z] == ')' && str[z + 1] && str[z + 1] == ')') {

                break
            }
            if (str[z] == ' ') {
                startTextLink = z
            }
            z++
        }
        endScobe = z

        let link = str.slice(startScobe, startTextLink)

        let curText = str.slice(startTextLink, z)


        workStr = str.slice(startScobe, endScobe)
        html += '<a href = "' + link + '">' + curText + '</a>'
        // < a href="https://ya.ru" > link</a > text.</p >

        let pas = 1

        let i_to_return = endScobe
        return i_to_return
    }

    function replaceFromTo(from, to) {
        while (str.includes(from)) {
            str = str.replace(from, to);
        }
    }
};


// " <ul><li>test</li></ul>"
// < ul > <li>test</li></ul >
// * test
str = `= head
                text ((https://ya.ru link)) text.

                * item
                * item
                `
// // let str = `
//                 * test

//                 * test

//                 textText
//                 `


// "
//     * test

// "

let data = `
= head

text ((https://ya.ru link)) text.

* item
* item

`

data = `
* test

`
console.log(module.exports(data));

anser = `<h1>head</h1><p>text <a href="https://ya.ru">link</a> text.</p><ul><li>item</li><li>item</li></ul>`
function isPas(data, anser, fun) {

    if (fun(data) == anser) {
        console.log('ok::: ', data);
    }
    else {
        console.log('ok::: ', data);
    }
}

// isPas(data, anser, module.exports()) 

