var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
let Y= (parseInt(lines[0]*60))/30;
console.log(`${Y} minutos`);
