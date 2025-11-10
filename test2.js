let str = 'abc'

function revrseStr(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        newStr = element + newStr

    }
    return newStr
}
str=revrseStr(str)
console.log('str::: ', str);
