let names: string[] = ['tom', 'david', 'chris', 'rambo'];
for (const temp of names) {
    console.log(temp);
}
//using generics
let empNames: Array<string> = ['ram', 'david', 'chris', 'krish'];
for (const temp of empNames) {
    console.log(temp);
}
console.log('********************************');
for (const temp in empNames) {
    console.log(empNames[temp]);
}