let word1 = "neatcdee", word2 = "neetcode"
let ar = []
ar.length
function compra(str1, str2) {
    if (str1.length != str2.length) {
        if (str1.length > str2.length) {

        }
        else {
            [str1, str2] = [str2, str1]
        }

        // str1>str2
        let deltaLen = str1.length - str2.length
        for (let i = 0; i < deltaLen; i++) {
            // const element = array[i];
            str2 += '_'

        }
    }
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        const charStr1 = str1[i];
        const charStr2 = str2[i];
        if (charStr1 != charStr2) {
            count++
        }

    }
    return count

}

let str1 = 'abc'
let str2 = 'cb'

// compra(str1, str2)
// console.log('compra(str1, str2)::: ', compra(str1, str2));
word1 = "monkeys", word2 = "money"


// compra(word1, word2)
console.log('compra(word1, word2)::: ', compra(word1, word2));


// word1.length
// console.log('word1.length::: ', word1.length);

// word2.length
// console.log('word2.length::: ', word2.length);
