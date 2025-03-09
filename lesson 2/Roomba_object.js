// import Roomba from 'Roomba_object';

// Объект робот-пылесос.
const Roomba = { // Есть негласное правило называть объекты в
    // алгоритмах с большой буквы.
    // Обычно сначала объявляют свойства объекта.
    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы.
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    }
}

// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
Roomba.startCleaning(); // 'I am cleaning... I have been started:
// 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот метод
// был вызван(об этом поговорим чуть ниже).
Roomba.switchUVLamp(); // 'UV lamp is not working.'
Roomba.goCharge(); // 'I am going to charge...'

// --------------------------------

// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот метод
// был вызван (об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times. !!!!!!!!!!!!!!!!!!!!!!!
// UV lamp is working.
// I am going to charge...

// --------------------------------

// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(function () {
    Roomba.startCleaning();
}, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот метод
// был вызван (об этом поговорим чуть ниже).
setTimeout(function () {
    Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
    Roomba.goCharge();
}, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...

// --------------------------------

// // Вызов методов объекта.
// // Вызов метода объекта через call с явной передачей объекта
// // робота-пылесоса в качестве контекста.
// Roomba.startCleaning.call(Roomba); // I am cleaning... I have
// // started: 1 times.
// // Тут этот пример не очень показателен, т.к. Мы и так имели
// // доступ к объекту, а внутри setTimeout использовать call возможно
// // только обернув все это в анонимную функцию, но тоже бессмысленно,
// // потому что тогда мы снова имеем доступ к объекту, как видели в
// // прошлом примере. Но мы можем передать в call другой объект и
// // увидеть что функция вызывается в контексте другого объекта:
// // Создадим фиктивный объект робота, который содержит только одно
// // свойство, необходимое для работы функции и сразу же зададим ему
// // первоначальное значение, отличное от того, которое задано у
// // робота, для наглядности.
// const notARobot = {
//     counterOfStarts: 10,
// };
// Roomba.startCleaning.call(notARobot); // I am cleaning... I have
// // been started: 11 times.

// --------------------------------

// Объект Roomba - робот-пылесос. Код самого объекта смотри в
// первом листинге.
// Пример использования метода apply, для вызова функции с
// передачей в качестве контекста объекта notARobot и передачей в
// неё аргументов arg1, arg2, arg3.
// Roomba.startCleaning.apply(notARobot, [arg1, arg2, arg3]); // I
// am cleaning... I have been started: 11 times.

// --------------------------------

// // Установим свойства объекта isUVLampOn в true, чтобы
// // продемонстрировать результат работы метода switchUVLamp.
// Roomba.isUVLampOn = true;
// // Результат вызова следующего метода зависит от значения,
// // хранящегося в свойстве объекта, а также от того как этот метод
// // 13был вызван (об этом поговорим чуть ниже).
// setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
// setTimeout(Roomba.goCharge.bind(Roomba), 3000);
// // I am cleaning... I have been started: 1 times.
// // UV lamp is not working.
// // I am going to charge...

// --------------------------------

// Вызов методов объекта.
Roomba.startCleaning(); // I am cleaning... I have started: NaN
// times.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have
// started: NaN times.
Roomba.startCleaning.apply(Roomba); // I am cleaning... I have
// started: NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod(); // I am cleaning... I have been started: NaN
// times.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I am
// cleaning... I have started: NaN times.

module.exports = { Roomba };