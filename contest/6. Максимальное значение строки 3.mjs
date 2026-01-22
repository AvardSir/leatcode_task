export const maximumValue = (words) => {

    let maxVal = 0
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isNum = true

        for (let j = 0; j < word.length; j++) {
            const char = word[j];

            const charCode = char.charCodeAt(0)

            if (charCode > 57 || charCode < 48) {
                isNum = false
                break
            }
        }

        if (isNum) {
            const numWord = Number(word)
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
    // for (const char of word) {

    //     let charCode = char.charCodeAt(0)

    //     if (charCode > 57 || charCode < 48) {
    //         isNum = false
    //         break
    //     }
    // }
    // if (isNum) {
    //     const numWord = Number(word)
    //     if (maxVal < numWord) {
    //         maxVal = numWord
    //     }
    // }
    // else {
    //     if (maxVal < word.length) {
    //         maxVal = word.length
    //     }
    // }

    // for (const word of words) {
    //     let isNum = true
    //     for (const char of word) {

    //         let charCode = char.charCodeAt(0)

    //         if (charCode > 57 || charCode < 48) {
    //             isNum = false
    //             break
    //         }
    //     }
    //     if (isNum) {
    //         const numWord = Number(word)
    //         if (maxVal < numWord) {
    //             maxVal = numWord
    //         }
    //     }
    //     else {
    //         if (maxVal < word.length) {
    //             maxVal = word.length
    //         }
    //     }
    // }
};


let arStr = ["a", "bb", "ccc"]
console.log('maximumValue(arStr)::: ', maximumValue(arStr));