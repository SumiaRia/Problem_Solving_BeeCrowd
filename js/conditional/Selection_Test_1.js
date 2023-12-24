var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = lines[0].split(" ");
var a = parseInt(value[0])
var b = parseInt(value[1])
var c = parseInt(value[2])
var d = parseInt(value[3])

if (b>c && d>a && c+d>a+b && c>=0 && d>=0 && a%2== 0){
	console.log("Valores aceitos");
}
else{
	console.log("Valores nao aceitos");
}
    