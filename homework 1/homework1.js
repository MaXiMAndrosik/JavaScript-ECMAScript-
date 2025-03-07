// Задание №1
// Нахождение минимального числа в массиве
// Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
// распространения (spread operator), найдите минимальное число в массиве. Решение
// должно быть написано в одной строке.

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);

console.log(minNumber); // 1
console.log('--------------------------------');

// Задание №2
// Создание счетчика
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с
// тремя методами: increment, decrement и getValue. Метод increment должен
// увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
// счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
// Значение счетчика должно быть доступно только через методы объекта, а не
// напрямую.

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getValue()); // 1
console.log(counter.decrement()); // 0
console.log(counter.getValue()); // 0
console.log('--------------------------------');

// Задание №3
// Рекурсивный поиск элемента по классу
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {

  if (root.classList.contains(className)) {
    return root;
  }

  for (let i = 0; i < root.children.length; i++) {
    const child = findElementByClass(root.children[i], className);
    if (child) {
      return child;
    }
  }

  return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); // Ожидаемый вывод: элемент с классом
// 'my-class', если найден
console.log('--------------------------------');
