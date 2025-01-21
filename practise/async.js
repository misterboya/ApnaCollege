const fs = require('fs');
fs.readFile('venu.txt', 'utf-8', (error, data) => {
    console.log(data);
});
console.log('Bye Venu !!!');