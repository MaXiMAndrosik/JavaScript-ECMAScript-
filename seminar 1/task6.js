// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(n) {
  if (n === 0) {
    return 0;
  }

  return n % 10 + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123)); // 6
console.log(sumDigits(456789)); // 39