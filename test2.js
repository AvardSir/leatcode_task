let str = 'intervals=[(0,50),(10,60),(60,110),(70,120),(20,70),(30,80),(40,90),(50,100),(80,130),(90,140),(100,150)]'

str=str.replaceAll('(','[')
str=str.replaceAll(')',']')
console.log( str);


