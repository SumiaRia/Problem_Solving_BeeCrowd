var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
let value1 = lines[0].split(" ");
let value2 = lines[1].split(" ");
let p1= (parseFloat(value2[0])-parseFloat(value1[0]))*(parseFloat(value2[0])-parseFloat(value1[0]));
let p2= (parseFloat(value2[1])-parseFloat(value1[1]))*(parseFloat(value2[1])-parseFloat(value1[1]));
let result= p1+p2;
let p = Math.sqrt(result).toFixed(4);
console.log(p);