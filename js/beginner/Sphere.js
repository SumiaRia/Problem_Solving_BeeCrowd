var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines[0])*parseFloat(lines[0])*parseFloat(lines[0]);
console.log("VOLUME =",((4/3)*3.14159*R).toFixed(3));
