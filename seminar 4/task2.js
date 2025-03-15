// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая
// задача должна быть выполнена через определенный промежуток времени, заданный в
// миллисекундах. Вам необходимо написать функцию, которая принимает список задач и
// интервал времени, а затем выполняет каждую задачу через определенный промежуток
// времени.
const tasks = [
{ name: 'task 1', time: 1000 },
{ name: 'task 2', time: 2000 },
{ name: 'task 3', time: 3000 },
{ name: 'task 4', time: 4000 },
{ name: 'task 5', time: 5000 }
];

const taskList = (tasks) => {
    let dalay = 0;
    tasks.forEach(element => {
        setTimeout(() => console.log(element.name), dalay += element.time);
    });
}

taskList(tasks);