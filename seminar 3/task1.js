// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод
        // мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
};

const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

function getPrototypeChain(obj) {
    const prototypeChain = [];

    while (obj) {
        prototypeChain.unshift(obj);
        obj = Object.getPrototypeOf(obj);
    }

    return prototypeChain;
}

Object.setPrototypeOf(Blues, MusicSeries);

console.log(getPrototypeChain(Blues));