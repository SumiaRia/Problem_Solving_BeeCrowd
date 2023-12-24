var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let hour = Math.floor(parseInt(lines[0])/3600);
let hour_remainder = (parseInt(lines[0]))%3600;
let minutes = Math.floor(hour_remainder/60);
let minutes_remainder = hour_remainder%60;
console.log(`${hour}:${minutes}:${minutes_remainder}`);
