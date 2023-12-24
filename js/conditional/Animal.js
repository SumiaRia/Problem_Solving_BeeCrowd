var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var w1 = lines[0];
var w2 = lines[1];
var w3 = lines[2];
if(w1 == "vertebrado"){
	if(w2 == "ave" && w3 == "carnivoro"){
		console.log("aguia");
	}
	else if(w2 == "ave" && w3 == "onivoro"){
    	console.log("pomba");
	}
	else if(w2 == "mamifero" && w3 == "onivoro"){
    	console.log("homem");
	}
	else{
    	console.log("vaca");
	}
}
else{
	if(w2 == "inseto" && w3 == "hematofago"){
    	console.log("pulga");
	}
	else if(w2 == "inseto" && w3 == "herbivoro"){
    	console.log("lagarta");
	}
	else if(w2 == "anelideo" && w3 == "hematofago"){
    	console.log("sanguessuga");
	}
	else{
    	console.log("minhoca");
	}
}
