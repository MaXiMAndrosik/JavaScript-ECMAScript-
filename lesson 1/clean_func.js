const student = {
    firstName: "Ivan",
    age: 21,
};
// Функция вычисления года рождения. Принимает текущий год, и
// вычисляет год рождения студента используя глобальные данные.Это
// функция с побочными эффектами.Она сильно зависит от глобальной
// переменной student.
const getYearOfBith = (currentYear) => {
    return currentYear - student.age;
}
console.log(getYearOfBith(2021)); // 2000
student.age = 25;
console.log(getYearOfBith(2021)); // 1996 - Мы вызывали функцию
//     дважды с одним и тем же параметром, но получили разный результат.
//     Это значит что мы не можем точно знать что вернет функция в тот
// 8или иной момент работы программы, и мы не можем гарантировать что
//     код будет выполняться верно.
// Чистая версия функции. Берет данные только из своих
// аргументов.
const getYearOfBithPureVersion = (age, currentYear) => {
    return age - currentYear;
}
// Более сложный пример с мутацией (побочными эффектами), но
// более частый на практике.
// Функция добавления нового ключа в объект. Принимает исходный
// объект, имя ключа, и значение, которое надо добавить.
const addField = (object, key, value) => {
    object[key] = value;
    return object;
};
const updatedStudent = addField(student, 'lastName', 'Belkin');
console.log(student); // {firstName: "Ivan", age: 25, lastName:
// "Belkin"} - вызвав нашу функцию добавления поля, мы изменили
//     начальный объект, что может привести к нежелательным последствиям
//     в остальном коде, которые порой очень сложно обнаружить.Например
//     дальше по коду может идти итерация объекта student и вывод только
//     начальных полей, но мы добавили в него третье поле, которое тоже
//     будет проитерировано.
console.log(updatedStudent); // {firstName: "Ivan", age: 25,
// lastName: "Belkin"}
// Чистый вариант функции - нам нужно создать новый объект внутри
// функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
    return { // возвращаем новый объект.
        ...object, // Воспользуемся оператором spread, для получения
        // копии свойств исходного объекта.
        [key]: value // Добавим новое свойство.
    }
};
const updatedStudentPure = addFieldPureVersion(student,
    'practiceTime', 148);
console.log(student); // {firstName: "Ivan", age: 25, lastName:
// "Belkin"} - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25,
// lastName: "Belkin", practiceTime: 148}