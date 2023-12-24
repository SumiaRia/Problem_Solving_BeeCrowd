var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = (parseFloat(lines[0])-parseInt(lines[0]));
console.log("NOTAS:");
//100
let note1 = Math.floor(parseInt(lines[0])/100);
let note1_rem = parseInt(lines[0])%100;
console.log(`${note1} nota(s) de R$ 100.00`);
//50
let note2 = Math.floor(note1_rem/50);
let note2_rem = note1_rem%50;
console.log(`${note2} nota(s) de R$ 50.00`);
//20
let note3 = Math.floor(note2_rem/20);
let note3_rem = note2_rem%20;
console.log(`${note3} nota(s) de R$ 20.00`);
//10
let note4 = Math.floor(note3_rem/10);
let note4_rem = note3_rem%10;
console.log(`${note4} nota(s) de R$ 10.00`);
//5
let note5 = Math.floor(note4_rem/5);
let note5_rem = note4_rem%5;
console.log(`${note5} nota(s) de R$ 5.00`);
//2
let note6 = Math.floor(note5_rem/2);
let note6_rem = note5_rem%2;
console.log(`${note6} nota(s) de R$ 2.00`);

console.log("MOEDAS:");
//1.00
let coin1= Math.floor(((note6_rem+value)*100)/100);
let coin1_rem = parseInt((note6_rem+value)*100)%100;
console.log(`${coin1} moeda(s) de R$ 1.00`);
//0.50
let coin2= Math.floor(coin1_rem/50);
let coin2_rem = coin1_rem%50;
console.log(`${coin2} moeda(s) de R$ 0.50`);
//0.25
let coin3= Math.floor(coin2_rem/25);
let coin3_rem = coin2_rem%25;
console.log(`${coin3} moeda(s) de R$ 0.25`);
//0.10
let coin4= Math.floor(coin3_rem/10);
let coin4_rem = coin3_rem%10;
console.log(`${coin4} moeda(s) de R$ 0.10`);
//0.05
let coin5= Math.floor(coin4_rem/5);
let coin5_rem = coin4_rem%5;
console.log(`${coin5} moeda(s) de R$ 0.05`);
//0.01
let coin6= Math.floor(coin5_rem/1);
let coin6_rem = coin5_rem%1;
console.log(`${coin6} moeda(s) de R$ 0.01`);
