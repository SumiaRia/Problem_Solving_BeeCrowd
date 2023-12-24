var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var value = lines[0].split(" ");
var a = parseFloat(value[0])* 2;
var b = parseFloat(value[1])* 3;
var c = parseFloat(value[2])* 4;
var d = parseFloat(value[3])* 1;
var exam = parseFloat(lines[1]);
var sum = (a+b+c+d)/10;
var result = (sum+exam)/2;
console.log(`Media: ${sum.toFixed(1)}`);
if (5.0 <= sum && sum <= 6.9){
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${exam.toFixed(1)}`);
    if(5.0<=sum){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.")
    }
    console.log(`Media final: ${result.toFixed(1)}`);
}
else if (7.0 <= sum){
    console.log("Aluno aprovado.");
}
else{
    console.log("Aluno reprovado." )
}
