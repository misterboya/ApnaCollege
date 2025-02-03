//1.find unique values from array
const array = [1,2,3,2,3,2,5,6,2];
//... this is spread operator(3 dots)
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//2. Check if array contains a value
const lang = ['Java', 'JavaScript', 'Python', 'Ruby'];
if (lang.includes('JavaScript')) {
    console.log('found');
} else {
    console.log('not found');
}

//3. Generate a random number
const min = 10;
const max = 200;
const randomNumber = Math.floor(Math.random() * (max - min));
console.log(`Random Number: ${randomNumber}`);

//4. String to Number
const strNumber = '32';
const parseNum = parseInt(strNumber);
console.log(parseNum);

//5.Join array elements into a string
const words = ['Hello', 'Venu'];
const sentence = words.join(' ');
console.log(sentence);

//6. Clone an array or object
const marks = [10,20,20,50,66,70];
const marksDuplicate = [...marks];
console.log(marksDuplicate);

const user = {
    name: 'Tom',
    age: 25,
    dob: '01-01-1995'
};
const userDuplicate = { ...user };
console.log(userDuplicate);

//7. Convert Object to Array
const employee = {
    name: 'Tom',
    age: 25,
    dob: '01-01-1995'
};
//a. Keys array
const keysArray = Object.keys(employee);
console.log(keysArray);
//b. Values array
const valuesArray = Object.values(employee);
console.log(valuesArray);
//c. key-value array
const keyValueArray = Object.entries(employee);
console.log(keyValueArray);

//8. Get current date and time
const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.toLocaleString());
console.log(currentDate.toDateString());

//9. truncate an array
const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

//10. Last item in an array
const pop = [0,1,2,3,4,5,6,7];
const lastItem = pop.slice(-1);
console.log(lastItem);
