const fs = require('fs');
const data = fs.readFileSync('venu.txt', 'utf-8');
console.log(data);
console.log('Bye Venu');