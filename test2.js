let neSet = new Set()

// neSet.delete()

neSet.add(2)
neSet.add(3)
neSet.add(1)
neSet.add(21)
neSet.add(-21)


neSet.add(-0)

neSet.add(-4)

neSet = Array.from(neSet)
console.log('neSet::: ', neSet);