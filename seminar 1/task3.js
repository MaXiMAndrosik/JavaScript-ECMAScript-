// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
    let value = initialValue;
    
    return {
        add(num) {
            value += num;
            return this;
        },
        subtract(num) {
            value -= num;
            return this;
        },
        getValue() {
            return value;
        }
    };
}

const calculator = createCalculator(0);
console.log(calculator.getValue()); // 0

calculator.add(5).subtract(3);
console.log(calculator.getValue()); // 2