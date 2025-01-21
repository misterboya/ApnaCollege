const getHello = (s: string) : string => {
    return s;
}
console.log(getHello("hey this is awsome!!!"));

const heroes = ["thor", "spiderman", "ironman"];
const withoutReturn = heroes.map(hero => {
    return `hero is ${hero.toUpperCase()}`;
})
console.log(withoutReturn);

const withReturn = heroes.map((hero) : string => {
    return `this is ${hero}`;
})
console.log(withReturn);