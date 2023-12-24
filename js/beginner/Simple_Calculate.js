var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prod1 = lines[0].split(' ');
let prod2 = lines[1].split(' ');
let total_prod1 =parseInt(prod1[1])*parseFloat(prod1[2]);
let total_prod2 =parseInt(prod2[1])*parseFloat(prod2[2]);
console.log("VALOR A PAGAR: R$",(total_prod1+total_prod2).toFixed(2));
