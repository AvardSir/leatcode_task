let ar=[1,2,3,' ','-',4]
// ar.pop(22)

let chars=` +-?/.,:`.split('')
ar=ar.filter(x=>!chars.includes(x))
let maaax=Math.max(...ar)
pas = 1