var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var value = lines[0].split(" ");
var a = parseFloat(value[0]);
var b = parseFloat(value[1]);
var c = parseFloat(value[2]);

if(a>b && a>c ){
    var A = a;
    if(b>c){
       var B = b;
       var C = c;
    }
    else{
        var B =c;
        var C = b;
    }
}
else if (b>a && b>c){
    var A = b;
    if(a>c){
       var B = a;
       var C = c;
    }
    else{
        var B = c;
        var C = a;
    }
}
else{
    var A = c;
    if(a>b){
       var B = a;
       var C = b;
    }
    else{
        var B = b;
        var C = a;
    }
}
if(A >= B + C){
    console.log("NAO FORMA TRIANGULO");
}
else{
	if((A*A) == (B*B) + (C*C)){
	    console.log("TRIANGULO RETANGULO");
	}
	if((A*A) > (B*B) + (C*C)){
	    console.log("TRIANGULO OBTUSANGULO");
	}
	if((A*A) < (B*B) + (C*C)){
	    console.log("TRIANGULO ACUTANGULO");
	}
	if(A == B && A == C){
	    console.log("TRIANGULO EQUILATERO");
	}
	if((A == B && A != C ) || (B == C && B != A ) || (A == C && A != B )){
	    console.log("TRIANGULO ISOSCELES");
	}
}
