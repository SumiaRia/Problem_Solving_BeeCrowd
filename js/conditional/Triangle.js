var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = lines[0].split(" ");
var a = parseFloat(value[0]);
var b = parseFloat(value[1]);
var c = parseFloat(value[2]);
var area = ((a+b)*c)/2;
if(b<a && c<a && a==(b+c)){
    console.log(`Area = ${area.toFixed(1)}`);
	}
else if(a<b && c<b && b==(a+c)){

		console.log(`Area = ${area.toFixed(1)}`);
}
else if(a<c && b<c && c==(a+b)){

		console.log(`Area = ${area.toFixed(1)}`);
}
else{
	console.log(`Perimetro = ${(a+b+c).toFixed(1)}`);
}
