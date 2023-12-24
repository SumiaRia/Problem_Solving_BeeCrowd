var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var num = lines[0].split(" ");
var a = parseInt(num[0]);
var b = parseInt(num[1]);
var c = parseInt(num[2]);

if(a<b && a<c && b<c){
    console.log(`${a}\n${b}\n${c}`);
    
}
else if(a<b && a<c && c<b){
    console.log(`${a}\n${c}\n${b}`);
}
else if(b<a && b<c && a<c){
    console.log(`${b}\n${a}\n${c}`);
}
else if(b<a && b<c && c<a){
    console.log(`${b}\n${c}\n${a}`);
}
else if(c<a && c<b && a<b){
    console.log(`${c}\n${a}\n${b}`);
}
else{
    console.log(`${c}\n${b}\n${a}`);
}
console.log(`\n${a}\n${b}\n${c}`);
