const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
    // Метод, с использованием стрелочной функции в качестве
    // функции обратного вызова.
    startTestingArrow: function () {
        console.log('Start testing...');
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ',
                value);
        })
    },
    // Метод, с использованием классической функции в качестве
    // функции обратного вызова.
    startTestingClassic: function () {
        console.log('Start testing...');
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ',
                value);
        })
    },
};
Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2