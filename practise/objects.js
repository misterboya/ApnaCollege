//object lterals: {}
const user = {
    name: 'michael',
    age: 35,
    country: 'USA',
    occupation: 'Engineer'
};
console.log(user.name);

//constructor function
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const carObject = new Car("BMW", "114d", 10000);
console.log(carObject.brand);

//class style
class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }

    addToCart() {
        console.log(`${this.product} added to cart`);
    }
}

const cust = new Customer("Venu", "Gold");
console.log(cust.name);
console.log(cust.product);
cust.addToCart();

//Object.create(): with some prototype object.
const employeePrototype = {
    printInfo:function() {
        console.log(`hello, emp name is ${this.name}`);
    }
};
const e1 = Object.create(employeePrototype);
e1.name = 'Tom';
e1.printInfo();