var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var value = lines[0].split(' ');
var x = parseFloat(value[0]);
var y = parseFloat(value[1]);
if(0 < x && 0 < y){
    console.log("Q1");
}
else if(x < 0 && 0 < y){
    console.log("Q2");
}
else if(x < 0 && y < 0){
    console.log("Q3");
}
else if(0 < x && y < 0){
    console.log("Q4");
}
else if(x == 0 && y!=0){
	console.log("Eixo Y")
}
else if(x!=0 && y==0){
	console.log("Eixo X")
}
else{
    console.log("Origem");
}
