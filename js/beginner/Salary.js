var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("NUMBER =", parseInt(lines[0]));
let SALARY= parseInt(lines[1])*parseFloat(lines[2]);
console.log("SALARY = U$",SALARY.toFixed(2));
