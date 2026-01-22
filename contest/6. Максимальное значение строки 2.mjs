export const maximumValue = (words) => {

    let maxVal = 0
    for (const word of words) {
        let isNum = true
        for (const char of word) {

            let charCode = char.charCodeAt(0)

            if (charCode > 57 || charCode < 48) {
                isNum = false
                break
            }
        }
        if (isNum) {
            const numWord=Number(word)
            if (maxVal < numWord) {
                maxVal = numWord
            }
        }
        else {
            if (maxVal < word.length) {
                maxVal = word.length
            }
        }
    }
    return maxVal
};


let arStr = ["a", "bb", "ccc"]
console.log('maximumValue(arStr)::: ', maximumValue(arStr));