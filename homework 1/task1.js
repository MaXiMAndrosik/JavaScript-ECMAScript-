// Задание №1
// Нахождение минимального числа в массиве
// Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
// распространения (spread operator), найдите минимальное число в массиве. Решение
// должно быть написано в одной строке.

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber);