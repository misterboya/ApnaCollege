class Car {
    static wheels = 4;
    constructor(model, name, price) {
        this.model = model;
        this.name = name;
        this.price = price;
        this.wheels = 8;
    }
    static stop() {
        console.log('Stop the car');
    }

    drive() {
        console.log('drive the car');
    }
}

const car1 = new Car('BWM', '114d', 10000);
console.log(`${car1.model}, ${car1.name}, ${car1.price}, ${Car.wheels}`);
Car.stop();
car1.drive();