alert("Vamos ver qual o maior valor (pico)!");

function maior(num1, num2, num3) {
  if(num1 > num2 && num1 > num3)
  	return num1;
  else if(num2 > num1 && num2 > num3)
  	return num2;
  else
  	return num3;
}

var numeros = [];

for(let i = 0; i < 3; i++){
	var num = parseInt(prompt("Digite o " + (i+1) + "° número: "));
	numeros.push(num);
}

alert("O maior valor é: " + maior(numeros[0], numeros[1], numeros[2]));