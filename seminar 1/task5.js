// Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password'));
// console.log(isPasswordValid('secret'));

function createPasswordChecker(length) {
  return function checkPassword(password) {
    return password.length === length;
  };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: true
console.log(isPasswordValid('secret')); // Ожидаемый результат: false