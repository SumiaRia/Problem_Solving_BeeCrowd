var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines[0].split(' ');
let first_two_number_ab=(parseInt(value[0])-parseInt(value[1]));
let abs_first_two_number_ab=Math.abs(first_two_number_ab);
let first_two_number_AB= parseInt(value[0])+parseInt(value[1])+abs_first_two_number_ab;
let result_AB= first_two_number_AB/2;
let final_two_number_ab= result_AB-parseInt(value[2]);
let abs_final_two_number_ab=Math.abs(final_two_number_ab);
let final_two_number_AB= result_AB+parseInt(value[2])+abs_final_two_number_ab;
console.log(`${final_two_number_AB/2} eh o maior`);
