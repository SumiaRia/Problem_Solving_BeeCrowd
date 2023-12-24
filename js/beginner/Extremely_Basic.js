var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = Number(lines[0])+Number(lines[1]);
console.log('X =',X);
