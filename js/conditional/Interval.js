var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var value = parseFloat(lines[0]);

if(0<=value && value <= 25.00){
	console.log("Intervalo [0,25]");
}
else if(25.00 < value && value <= 50.00){
	console.log("Intervalo (25,50]");
}
else if(50.00 < value && value <= 75.00){
	console.log("Intervalo (50,75]");
}
else if(75.00 < value && value <= 100.00){
	console.log("Intervalo (75,100]");
}
else{
	console.log("Fora de intervalo");
}
