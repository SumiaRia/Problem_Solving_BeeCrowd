var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = lines[0].split(" ");
var code = parseInt(value[0]);
var amount =parseInt(value[1]);
if(code == 1){
    console.log(`Total: R$ ${(amount*4.00).toFixed(2)}`);
}
else if(code == 2){
    console.log(`Total: R$ ${(amount*4.50).toFixed(2)}`);
}
else if(code == 3){
    console.log(`Total: R$ ${(amount*5.00).toFixed(2)}`);
}
else if(code == 4){
    console.log(`Total: R$ ${(amount*2.00).toFixed(2)}`);
}
else{
    console.log(`Total: R$ ${(amount*1.50).toFixed(2)}`);
}
