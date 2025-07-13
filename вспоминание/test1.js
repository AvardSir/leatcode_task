
console.log('2')
const pi=3.14

let num=30

let str='hello world'
let bool=true
bool=!bool

let obj={
    
    'heh':'helo'
}

console.log('obj::: ', obj['heh']);

const arr=[1,2,3]
arr[0]=123
arr[1]=321
arr[2]=333

const null_=null

let mod=11%2
let mod3=31%3


let test=3=='3'
let test2=3==='3'


let True=true?false:true

let rost=131

let IfVisok=(rost>180)?true:false

if (IfVisok) {
    console.log('Высок')
    
}
else{
    console.log('Не высок')
}

//функция без имени стрелочная
let visol=(rost)=>{
    if (rost>180) {
        console.log('Высок::1: ');
    }
    else{
        console.log('Не Высок::: ');
    }
}
visol(188)
let name="ivan"

let greetings=`hello ${name}`

let Avengers=['hulk','iron man', 'Thor']
Avengers.push('Spider-man')
console.log('Avengers::: ', Avengers);
Avengers.pop()
console.log('Avengers::: ', Avengers);
Avengers=Avengers.map(el=>el.toLowerCase())
console.log('Avengers::: ', Avengers);
Avengers=Avengers.filter(el=>((el=="hulk")))
console.log('Avengers::: ', Avengers);

let human={
    name: "ivan",
    
    age:12,
    
    say_my_name_and_age(){
console.log('my name::: ', this.name,' my age::: ', this.age);

    }
}
human.say_my_name_and_age()


class car{
    name='porshe'
    speed=100
    max_fuel=100
    constructor(name,speed,max_fuel){
        this.name=name
        this.speed=speed
        
        this.max_fuel=max_fuel
    }

    /**
     * 
     */
    about() {
console.log('this.name::: ', this.name);
        console.log('this.speed::: ', this.speed);
        console.log('this.max_fuel::: ', this.max_fuel);
    }

        
}

let niva=new car('niva',150,1000)
niva.about()

let color_of_light_traffic=['red','yellow','green']

let [stop_color,wait_color,go_color]=color_of_light_traffic
// stop_color='ultra_red'
console.log('stop_color::: ', stop_color);

arr_alphabet=['a','b','c']

arr_alphabet=[...arr_alphabet,'d']

arr_with_num=[1,2,3]

total_for_arr_with_num=arr_with_num.reduce((acc,el)=>acc+el,0)

sum_arr=[1,2,3,4].reduce((acc,ell)=>acc+ell)
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Всегда выводит 4 (если var)
  }, 1000);
}
console.log('::2: ' );
// Выведет: 4, 4, 4 (из-за общей области видимости var)
let pass=2

