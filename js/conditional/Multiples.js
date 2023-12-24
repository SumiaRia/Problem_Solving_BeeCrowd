var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = lines[0].split(" ");
var a = parseInt(value[0]);
var b = parseInt(value[1]);

if(b%a==0 || a%b ==0){
	console.log("Sao Multiplos");
}
else{
	console.log("Nao sao Multiplos")
}
