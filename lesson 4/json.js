// Объект -> JSON.
const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Обратите внимание, что все ключи стали
// обернуты в кавычки.
// {
//     "name": "Slava",
//         "surname": "Belkin",
//             "age": 20,
//                 "practice": {
//         "place": "IKTG",
//             "hours": 47
//     }
// }

// JSON -> Объект.
const jsonString = JSON.stringify(student, null, 4);

console.log(JSON.parse(jsonString));
// {
//     name: 'Slava',
//     surname: 'Belkin',
//     age: 20,
//     practice: { place: 'IKTG', hours: 47 }
// }

console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]'));
// ["Belkin", "Ivanov", "Petrov"]