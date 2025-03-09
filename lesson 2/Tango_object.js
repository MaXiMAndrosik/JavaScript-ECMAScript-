import { Roomba } from './Roomba_object.js';

// Объект Roomba - робот-пылесос. Код самого объекта смотри в
// листинге 1.
// Объект робот-пылесос модель Tango.
const Tango = { // Есть негласное правило называть объекты в
    // алгоритмах с большой буквы.
    // Обычно сначала объявляют свойства объекта.
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы. А так как методы у
    // новой модели такие же как и у старой, давайте позаимствуем их у
    // объекта Roomba.
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp,
}

// Объект Roomba - робот-пылесос. Код самого объекта смотри в
// листинге 1.
// Обращение к свойствам и методом объекта Roomba. Код обращения
// смотри в листинге 2.
// Объект Tango - робот-пылесос. Код самого объекта смотри в
// листинге 5.
// Обращение к свойствам объекта Tango.
console.log(Tango.model); // "Tango-1"
console.log(Tango.isFull); // false
// Вызов методов объекта.
Tango.startCleaning(); // 'I am cleaning... I have been started:
// 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Tango.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот метод
// был вызван(об этом поговорим чуть ниже).
Tango.switchUVLamp(); // 'UV lamp is not working.'
Tango.goCharge(); // 'I am going to charge...'