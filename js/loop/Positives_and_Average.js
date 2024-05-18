process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var numbers = lines.length;
var count = 0
var sum = 0
var avg
for(var i = 0; i < numbers; i++){
    if(lines[i] > 0){
        count++
        sum = sum + parseFloat(lines[i])
    }
}
avg = (sum / count)
console.log(`${count} valores positivos`)
console.log(`${avg.toFixed(1)}`)
