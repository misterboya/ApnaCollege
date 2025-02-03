var names = ['tom', 'david', 'chris', 'rambo'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var temp = names_1[_i];
    console.log(temp);
}
//using generics
var empNames = ['ram', 'david', 'chris', 'krish'];
for (var _a = 0, empNames_1 = empNames; _a < empNames_1.length; _a++) {
    var temp = empNames_1[_a];
    console.log(temp);
}
console.log('********************************');
for (var temp in empNames) {
    console.log(empNames[temp]);
}
