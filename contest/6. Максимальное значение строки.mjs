export const maximumValue = (words) => {
    let max = 0;
    
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        let isNum = true;
        
        // Быстрая проверка без создания лишних переменных
        for (let j = 0; j < w.length; j++) {
            const code = w.charCodeAt(j);
            if (code < 48 || code > 57) { // '0'=48, '9'=57
                isNum = false;
                break;
            }
        }
        
        const val = isNum && w.length > 0 ? +w : w.length;
        if (val > max) max = val;
    }
    
    return max;
};


let arStr = ["a", "bb", "ccc"]

// maximumValue(arStr)
console.log('maximumValue(arStr)::: ', maximumValue(arStr));
// console.log('maximumValue::: ', maximumValue);