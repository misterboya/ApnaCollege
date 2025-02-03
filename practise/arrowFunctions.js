const greet = (username='guest', age=0) => `Hello ${username}! you are ${age} years old`;
const name1 = greet();
console.log(name1);
const name2 = greet('Venu', 43);
console.log(name2);

//rest parameters ...numbers will take an array of numbers
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
const total = sum(1,2,3,4,5,10);
console.log(`Total sum is: ${total}`);

const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log(`other details:`, details);
};
browserInfo();
browserInfo('Firefox', 'version=115.11', 'vendor=mozilla', 'mode=headless');

const findMaxNumber = (a,b,c) => {
    return Math.max(a,b,c);
};
const max = findMaxNumber(10,20,50);
console.log(`Max number is: ${max}`);