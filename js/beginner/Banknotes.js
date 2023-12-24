var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log(lines[0]);
//100
let notes1 = (parseInt(lines[0]))/100;
let remainder_notes1=  (parseInt(lines[0]))%100;
let notes1_decimal = notes1.toString().split('.')[0];
console.log(`${notes1_decimal} nota(s) de R$ 100,00`);
//50
let notes2 = remainder_notes1/50;
let remainder_notes2=  remainder_notes1%50;
let notes2_decimal = notes2.toString().split('.')[0];
console.log(`${notes2_decimal} nota(s) de R$ 50,00`);

//20

let notes3 = remainder_notes2/20;
let remainder_notes3=  remainder_notes2%20;
let notes3_decimal = notes3.toString().split('.')[0];
console.log(`${notes3_decimal} nota(s) de R$ 20,00`);
//10
let notes4 = remainder_notes3/10;
let remainder_notes4=  remainder_notes3%10;
let notes4_decimal = notes4.toString().split('.')[0];
console.log(`${notes4_decimal} nota(s) de R$ 10,00`);
//5
let notes5 = remainder_notes4/5;
let remainder_notes5=  remainder_notes4%5;
let notes5_decimal = notes5.toString().split('.')[0];
console.log(`${notes5_decimal} nota(s) de R$ 5,00`);
//2
let notes6 = remainder_notes5/2;
let remainder_notes6=  remainder_notes5%2;
let notes6_decimal = notes6.toString().split('.')[0];
console.log(`${notes6_decimal} nota(s) de R$ 2,00`);
//1
let notes7 = remainder_notes6/1;
let remainder_notes7=  remainder_notes6%1;
let notes7_decimal = notes7.toString().split('.')[0];
console.log(`${notes7_decimal} nota(s) de R$ 1,00`);

