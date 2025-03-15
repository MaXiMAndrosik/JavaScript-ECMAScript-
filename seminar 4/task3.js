// Напишите программу, которая загружает данные с сервера с использованием
// объекта XMLHttpRequest
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка)
// - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью
// new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет
// вызываться при изменении состояния запроса. Проверьте, если успешно
// выполнен запрос и успешный статус ответа сервера, то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true).
// 5. Отправьте запрос на сервер.

const XMLHttpRequest = require('xhr2');

const loadData = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onprogress = function (event) {
        console.log(`Get from server: ${event.loaded} bytes`);
    };

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status === 200) {
            console.log(`Status ${xhr.status}: ${xhr.statusText}`);
            console.log(`Server: ${xhr.responseText}`);
        }
    }

}

loadData('https://jsonplaceholder.typicode.com/posts');
