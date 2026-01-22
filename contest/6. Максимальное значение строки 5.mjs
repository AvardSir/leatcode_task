export const maximumValue = (words) => {

    let maxVal = 0

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let isNum = true

        for (let j = 0; j < word.length; j++) {
            let char = word[j];


            if (isNaN(char)) {
                isNum = false
                break
            }
            // let charCode = char.charCodeAt(0)

            // if (charCode > 57 || charCode < 48) {
            //     isNum = false
            //     break
            // }


            // if (48 <= charCode && charCode <= 57) {

            // }
            // else {

            // }
        }

        if (isNum) {
            // let numWord = Number(word)

            // if (maxVal < numWord) {
            //     maxVal = numWord
            // }

            maxVal = Math.max(maxVal, Number(word))
        }
        else {
            maxVal = Math.max(maxVal, word.length)

            // if (maxVal < word.length) {
            //     maxVal = word.length
            // }
        }

    }

    return maxVal
};


let arStr = ["a", "bb", "ccc"]
console.log('maximumValue(arStr)::: ', maximumValue(arStr));