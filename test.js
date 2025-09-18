// фильтрация как

let ar = [3, 4, 23]

let idTodel = 1

ar = ar.filter((v, i) => i != idTodel)


console.log('ar::: ', ar);
let ar2=ar
ar.pop()

console.log('ar::: ', ar);