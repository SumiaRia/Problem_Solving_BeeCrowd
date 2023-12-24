var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let year = Math.floor(parseInt(lines[0])/365);
let year_remainder= (parseInt(lines[0]))%365;
console.log(`${year} ano(s)`);
let month = Math.floor(year_remainder/30);
let month_remainder = year_remainder%30;
console.log(`${month} mes(es)`);
console.log(`${month_remainder} dia(s)`);
