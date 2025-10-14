module.exports = (str) => {
    let html = "";
    let ulFlag = false;
    const strArr = str.trim().split(`\n`);
    for (let i = 0; i < strArr.length; i++) {
        if (ulFlag && strArr[i]?.[0] !== "*") {
            html += "</ul>";
            ulFlag = false;
        }
        if (!strArr[i].trim()) continue;
        if (strArr[i]?.[0] === "=") {
            html += `<h1>${strArr[i].slice(2).trim()}</h1>`;
        } else if (strArr[i]?.[0] === "*") {
            if (!ulFlag) {
                html += "<ul>";
                ulFlag = true;
            }
            html += `<li>${strArr[i].slice(2).trim()}</li>`;
        } else {
            const arr = strArr[i].split(/\(\(|\)\)/);
            html += "<p>";
            for (let ii = 0; ii < arr.length; ii++) {
                if ((ii / 2) % 1 === 0) {
                    html += `${arr[ii]} `;
                } else {
                    const url = arr[ii].split(" ");
                    html += `<a href="${url[0]}">${url[1]}</a> `;
                }
            }
            html += "</p>";
        }
    }

    if (ulFlag) {
        html += "</ul>";
    }

    return html;
};

// console.log("text ((https://ya.ru link)) text.".split(/\(\(|\)\)/));


// " <ul><li>test</li></ul>"
// < ul > <li>test</li></ul >
// * test
data = `


= head
                text ((https://ya.ru link)) text.

                * item
                * item
                `

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

