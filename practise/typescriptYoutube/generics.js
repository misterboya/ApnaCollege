console.log("this is generics!!!");
var score = [];
console.log(score.push(4));
console.log(score.push(3));
console.log(score.push(2));
console.log(score.push(1));
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
var botEg = identityFour({ brand: "nike", type: 50 });
console.log("interface example brand is: ".concat(botEg.brand, " and type is: ").concat(botEg.type));
function getSearchProducts(products) {
    //do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
console.log("search more products results: ".concat(getMoreSearchProducts([5, 67, 78, 9, 21, 4])));
