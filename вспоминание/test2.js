for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Всегда выводит 4 (если var)
  }, 1000);
}
// Выведет: 4, 4, 4 (из-за общей области видимости var)