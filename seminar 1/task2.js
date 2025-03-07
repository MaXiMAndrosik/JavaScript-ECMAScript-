// 1 . Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(arr) {
//     const result = [];
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             result.push(element);
//         }
//     });

//     return result;
// }

const getEvenNumbers = (arr) => arr.filter(element => element % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ------------------------------------------------------------------------
// 2. Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const calculateAverage = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ------------------------------------------------------------------------
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // return str[0].toUpperCase() + str.slice(1);
};

console.log(capitalizeFirstLetter('sdgdfgdfg sdfsfdf '));
