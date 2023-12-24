var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines[0].split(' ');
let triangle_value = parseFloat(value[0])*parseFloat(value[2]);
let circle_value = parseFloat(value[2])*parseFloat(value[2]);
let trapezium =(parseFloat(value[0])+parseFloat(value[1]))*parseFloat(value[2]);
let square_value = parseFloat(value[1])*parseFloat(value[1]);
let rectangle_value =(parseFloat(value[0])*parseFloat(value[1]));
console.log ("TRIANGULO:", ((1/2)*triangle_value).toFixed(3));
console.log("CIRCULO:",(3.14159*circle_value).toFixed(3));
console.log("TRAPEZIO:",(0.5*trapezium).toFixed(3));
console.log("QUADRADO:",square_value.toFixed(3));
console.log("RETANGULO:",rectangle_value.toFixed(3));
