var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = parseFloat(lines[0]);
if(value>=0 && 400.00>=value){
    console.log(`Novo salario: ${(value+(value*0.15)).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(value*0.15).toFixed(2)}`);
    console.log(`Em percentual: 15 %`);
}
else if(value>=400.01 && 800.00>=value){
    console.log(`Novo salario: ${(value+(value*0.12)).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(value*0.12).toFixed(2)}`);
    console.log(`Em percentual: 12 %`);
}
else if(value>=800.01 && 1200.00>=value){
    console.log(`Novo salario: ${(value+(value*0.1)).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(value*0.1).toFixed(2)}`);
    console.log(`Em percentual: 10 %`);
}
else if(value>=1200.01 && 2000.00>=value){
    console.log(`Novo salario: ${(value+(value*0.07)).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(value*0.07).toFixed(2)}`);
    console.log(`Em percentual: 7 %`);
}
else{
    console.log(`Novo salario: ${(value+(value*0.04)).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(value*0.04).toFixed(2)}`);
    console.log(`Em percentual: 4 %`);
}
