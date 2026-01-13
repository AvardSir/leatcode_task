const assert = require('assert');
const getAvailableSatellites = require('./your-file');

async function runTests() {
  console.log("Запуск тестов...\n");

  // Тест 1
  {
    const satellites = [
      { name: "Медленный", check: () => new Promise(r => setTimeout(r, 2000)) },
      { name: "Быстрый", check: () => new Promise(r => setTimeout(r, 500)) }
    ];

    const result = await getAvailableSatellites(satellites, 1000);
    assert.deepStrictEqual(result, ["Быстрый"]);
    console.log("✅ Тест 1 пройден");
  }

  // Тест 2
  {
    const satellites = [
      { name: "Ошибка", check: () => new Promise((_, r) => setTimeout(() => r(), 300)) },
      { name: "Нормальный", check: () => new Promise(r => setTimeout(r, 400)) }
    ];

    const result = await getAvailableSatellites(satellites, 1000);
    assert.deepStrictEqual(result, ["Нормальный"]);
    console.log("✅ Тест 2 пройден");
  }

  // Тест 3
  {
    const satellites = [];
    const result = await getAvailableSatellites(satellites, 1000);
    assert.deepStrictEqual(result, []);
    console.log("✅ Тест 3 пройден");
  }

  // Тест 4 (из задания)
  {
    const satellites = [
      {
        name: "Первый",
        check: () => new Promise(resolve => setTimeout(() => resolve("ok"), 2000))
      },
      {
        name: "Второй",
        check: () => new Promise(resolve => setTimeout(() => resolve("ok"), 500))
      }
    ];

    const result = await getAvailableSatellites(satellites, 1000);
    assert.deepStrictEqual(result, ["Второй"]);
    console.log("✅ Тест 4 (основной) пройден");
  }

  console.log("\n🎉 Все тесты успешно пройдены!");
}

runTests().catch(console.error);