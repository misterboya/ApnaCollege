//max number in the array
let top = [10,5,51,25,8,30,15,50];
console.log("*****************MAX NUMBER*********************");
let maxNumber = top.reduce((max, num) => {
    if(num > max) {
        return num;
    } else {
        return max;
    }
}, top[0]);
console.log(`Maximum number is: ${maxNumber}`);
console.log("*****************MAP*********************");
console.log(`Original array: ${top}`);
let mapExample = top.map(e => e * 2);
console.log(`Map example: ${mapExample}`);
console.log("*****************FILTER*********************");
let filterExample = top.filter(e => e % 2 === 0);
console.log(`Filter example: ${filterExample}`);
