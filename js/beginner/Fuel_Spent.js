var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
let value= (parseInt(lines[1])*parseInt(lines[0]))/12;
console.log(value.toFixed(3));
