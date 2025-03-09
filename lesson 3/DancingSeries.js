import { VacuumCleaner } from './VacuumCleaner_proto.js';

// Объявление родительского объекта смотри в листинге VacuumCleaner.
// Объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод
        // мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
}

// module.exports = { DancingSeries };
export default DancingSeries;
