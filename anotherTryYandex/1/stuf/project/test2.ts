function echo(value: any): any {
    return value;
}


const result = echo('hello'); // result имеет тип any — мы потеряли информацию, что это строка!
const result4 = echo(5); // result имеет тип any — мы потеряли информацию, что это строка!


function echo2<T>(value: T): T {
    return value;
}

const result2 = echo2('hello'); // result теперь string!
const result3 = echo2(42);     // result2 теперь number!

// С any — TS НЕ ПОДСКАЖЕТ, если ошибётесь
const res1 = echo('hello');
console.log(res1.toFixed(2)); // Ошибка в браузере, но TS промолчал!

// С дженериком — TS ПОДСВЕТИТ КРАСНЫМ
const res2 = echo2('hello');
console.log(res2.toFixed(2)); // ❌ TS скажет: "Свойства 'toFixed' нет у типа 'string'"


console.log('result3::: ', result3);

