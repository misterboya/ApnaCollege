var getHello = function (s) {
    return s;
};
console.log(getHello("hey this is awsome!!!"));
var heroes = ["thor", "spiderman", "ironman"];
var withoutReturn = heroes.map(function (hero) {
    return "hero is ".concat(hero.toUpperCase());
});
console.log(withoutReturn);
var withReturn = heroes.map(function (hero) {
    return "this is ".concat(hero);
});
console.log(withReturn);
