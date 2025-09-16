let arr = [3, 2, 4, 1]

let left = 0, right = arr.length - 1, mid = Math.floor((left + right) / 2)

let pivot = arr[mid]

// поптробуй повтоирт
// quick select i->  p  <-j

while (true) {
    while (arr[left] < pivot) {
        left++
    }
    console.log('arr[++left]::: ', arr[left]);
    while (arr[right] > pivot) {
        right--
    };
    console.log('arr[++right]::: ', arr[right]);
    [arr[left], arr[right]] = [arr[right], arr[left]]
    if (left + 1 >= right) {

        break
    }
}
console.log('arr::: ', arr);
// сделал вродеб чо дальше
// зачем я это делаю?

let pas1 = 1