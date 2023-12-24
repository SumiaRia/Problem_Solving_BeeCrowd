var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = parseFloat(lines[0]);

if(value >= 2000.01 && value <= 3000.00){
    var a = (value-2000)*0.08;
    console.log(`R$ ${a.toFixed(2)}`);
}
else if(value >= 3000.01 && value <= 4500.00){
    var b = (1000*0.08)+((value-3000)*0.18);
    console.log(`R$ ${b.toFixed(2)}`);
}
else if(value > 4500.00){
    var c = (1000*0.08)+(1500*0.18)+((value-4500.00)*0.28);
    console.log(`R$ ${c.toFixed(2)}`);
}
else{
    console.log("Isento");
}
