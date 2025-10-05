let st = new Set()

st.add(0)
st.add(3)

let arr = [1, 2, 3, 4, 5]

arr = arr.filter((v, i) => !st.has(i))
console.log('arr::: ', arr);