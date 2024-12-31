//1.every() method
let num = [1,2,3,4,5,6,11];
let flag = num.every(e => e<10);
console.log(`Every element lessthan 10? ${flag}`);

//2.some()
let number = [1,21,3,4,5];
let someFlag = number.some(e => e%2 === 0);
console.log(`Atleast some numbers are even? ${someFlag}`);

//3.find
let temp = [1,2,3,4,5];
let tempFlag = temp.find(e => e%2 === 0);
console.log(`Find first number divisible by 2? ${tempFlag}`);