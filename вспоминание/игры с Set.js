let dc_heros=new Set()

dc_heros.add('batman')
dc_heros.add('superman')
dc_heros.add('aquamen')
dc_heros.add('batgirl')


console.log('dc_heros.entries()::: ', dc_heros.entries());
for (const i of dc_heros.entries()) {
    i[0]
    i[1]
    console.log('i[0]::: ', i[0]);
    console.log('i[1]::: ', i[1]);
}

let pas=123