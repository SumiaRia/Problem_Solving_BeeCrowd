var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let NAME = lines[0];
let TOTAL = parseFloat(lines[1])+(parseFloat(lines[2])*0.15);
console.log("TOTAL = R$",TOTAL.toFixed(2));
