var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let DIFERENCA = parseInt(lines[0])*parseInt(lines[1])-parseInt(lines[2])*parseInt(lines[3]);
console.log("DIFERENCA =",DIFERENCA);
