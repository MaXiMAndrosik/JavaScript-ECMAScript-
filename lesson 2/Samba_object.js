import { Roomba } from './Roomba_object.js';

// Объект робот-пылесос модель Samba.
const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // На этот раз мы не будем создавать методы в объекте, мы
    // постараемся их заимствовать непосредственно перед использованием.
}

// Обращение к свойствам объекта Samba.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Одолжим методы из объекта Roomba.
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;
// Вызов методов объекта.
Samba.startCleaning(); // 'I am cleaning... I have been started:
// 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Samba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот метод
// был вызван(об этом поговорим чуть ниже).
Samba.switchUVLamp(); // 'UV lamp is not working.'
Samba.goCharge(); // 'I am going to charge...'