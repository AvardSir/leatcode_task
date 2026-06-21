// Пример 1: Опциональное свойство в объекте
interface User {
  name: string;        // Обязательное
  age?: number;        // Опциональное (может быть number или undefined)
  phone?: any;         // Опциональное (может быть что угодно или undefined)
}

const user1: User = { name: 'Alex' };          // ✅ Ок (age и phone нет)
const user2: User = { name: 'Alex', age: 30 }; // ✅ Ок (age есть)
const user3: User = { name: 'Alex', phone: '+7-999' }; // ✅ Ок (phone есть)
const user4: User = { phone: '+7-999' }; // ❌ Ошибка! name обязателен