var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = 3.14159*parseFloat(lines[0])*parseFloat(lines[0]);
console.log(`A=${A.toFixed(4)}`);
