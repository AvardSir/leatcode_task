module.exports = (str) => {
    let html = '';
    //  Ваш код здесь

    str = str.split('\n')
    // str=str.trim()
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        str[i] = str[i].trim()

    }

    let flagUl = false
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (flagUl && element[0] != '*') {
            flagUl = false
            html += '</ul>'
        }

        if (element == '') {
            continue
        }


        if (element[0] == '=') {
            // = head

            // <h> </h>
            html += '<h1>' + str[i].slice(2) + '</h1>'

            let pas = 1

        }
        else if (element[0] == '*') {
            if (!flagUl) {
                flagUl = true
                html += '<ul>'
            }

            html += '<li>' + str[i].slice(2) + '</li>'

            // < li ></li >


        }
        else {

            html += '<p>'
            // p
            // сылки
            let p = 0

            while (p < str[i].length) {
                let elP = str[i][p]
                // console.log('str[i]::: ', str[i]);
                if (elP == '(') {
                    console.log('str[p + 1]::: ', str[p + 1]);

                    let pa1 = 1
                }
                if (elP == '(' && str[i][p + 1] && str[i][p + 1] == '(') {

                    let scobes = p + 2
                    let starLink = scobes
                    let endLink
                    let endScobes
                    while (true) {

                        elScove = str[i][scobes]
                        if (elScove == ' ') {
                            // endLink
                            endLink = scobes

                        }
                        if (str[i][scobes] == ')' && str[i][scobes + 1] && str[i][scobes + 1] == ')') {

                            endScobes = scobes
                            break
                        }
                        scobes++
                    }

                    let link = str[i].slice(starLink, endLink)

                    let textLink = str[i].slice(endLink, endScobes)
                    html += '<a href="' + link + '">' + textLink + '</a>'


                    p = scobes + 1
                }
                else {
                    html += elP
                }

                p++
            }

            html += '</p>'
        }




    }
    if (flagUl) {
        html += '</ul>'
    }
    return html;
};


// " <ul><li>test</li></ul>"
// < ul > <li>test</li></ul >
// * test
data = `
    

= head
                text ((https://ya.ru link)) text.

                * item
                * item
                `


data = `
= head

text ((https://ya.ru link)) text.

* item
* item
`


// data = `
// * test

// `
// let data = `
// = head

// text ((https://ya.ru link)) text.

// * item
// * item

// `

// data = `
// * test

// `

// data = `
// * item
// * item

// `

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

