var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let PROD =parseInt(lines[0])*parseInt(lines[1]);
console.log("PROD =",PROD);
