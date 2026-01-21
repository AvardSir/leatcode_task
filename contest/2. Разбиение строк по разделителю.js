
const splitWordsBySeparator = (words, separator) => {

    if (words.length == 0) {
        return []
    }
    if (separator == '') {
        return words
    }

    function checkSep(startIndex, word) {

        for (let sepIndex = 0; sepIndex < separator.length; sepIndex++) {
            const charSep = separator[sepIndex];

            if (startIndex >= word.length) {
                return false;
            }
            // todo почему  startI + sepIndex прошел 
            // а // startI++ нет
            if (charSep != word[startIndex ]) {
                return false
            }
            startIndex++

        }
        return true
    }

    let ans = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let prevJ = 0
        for (let j = 0; j < word.length; j++) {
            const charInWord = word[j];

            // if (  charInWord == separator) {
            if (checkSep(j, word)) {
                let curWord = word.slice(prevJ, j)
                prevJ = j + separator.length
                j = j + separator.length - 1
                if (curWord === '') {
                    continue
                }
                ans.push(curWord)
            }
        }

        // TODO проверить последни элемент это разделитель

        // if (word.length != 0 && word[word.length - 1] && !checkSep(word.length - separator.length, word)) {
        //     ans.push(word.slice(prevJ, word.length))
        // }

        if (prevJ < word.length) {
            let lastWord = word.slice(prevJ, word.length)
            if (lastWord != '') {
                ans.push(lastWord)
            }
        }


    }
    // ans.push('')
    // ans = ans.filter((v) => v != '')
    return ans
    // Ваше решение
};
let [words, separator] = [["...22.,33..", ".one.two.three", "four.five", "six"], ".."];
// [words, separator] = [["1/", "/2", "/"], "/"]

// splitWordsBySeparator = (words, separator)
console.log('splitWordsBySeparator = (words, separator)::: ', splitWordsBySeparator(words, separator));
