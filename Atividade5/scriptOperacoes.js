alert("Vamos fazer alguns cálculos!");

var num1 = parseInt(prompt("Insira o primeiro número:"));
var num2 = parseInt(prompt("Insira o segundo número:" ));

var soma          = num1 + num2;
var subtracao     = num1 - num2;
var multiplicacao = num1 * num2;
var divisao;

if(num2 <= 0){

	divisao = "nada, impossível dividir por " + num2;

} else {

	var divisao = num1 / num2;
	
}

alert("A soma entre os números "          + num1 + " e " + num2 + " resulta em: " + soma         );
alert("A subtração entre os números "     + num1 + " e " + num2 + " resulta em: " + subtracao    );
alert("A multiplicacao entre os números " + num1 + " e " + num2 + " resulta em: " + multiplicacao);
alert("A divisao entre os números "       + num1 + " e " + num2 + " resulta em: " + divisao      );