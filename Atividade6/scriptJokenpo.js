alert("Vamos jogar Jo-ken-pô!");

const PEDRA = 1;
const PAPEL = 2;
const TESOURA = 3;

var elemento = parseInt(prompt("Escolha o seu elemento:"
	+"\n1 - Pedra"
	+"\n2 - Papel"
	+"\n3 - Tesoura"
	+"\nDigite o número do elemento:"));

var computador = Math.random() * (3 - 1) + 1;
computador = parseInt(computador.toFixed(0));
//Computador: 1 = Pedra | 2 = Papel | 3 = Tesoura

if(elemento === PEDRA){

	switch(computador){
		case PEDRA:
		alert("O computador escolheu pedra."
			+"\nResultado: Empate!");
		break;
		case PAPEL:
		alert("O computador escolheu papel."
			+"\nResultado: Você perdeu!");
		break;
		case TESOURA:
		alert("O computador escolheu pedra."
			+"\nResultado: Você venceu!");
		break;
	}

} else if(elemento === PAPEL){

	switch(computador){
		case PEDRA:
		alert("O computador escolheu pedra."
			+"\nResultado: Você venceu!");
		break;
		case PAPEL:
		alert("O computador escolheu papel."
			+"\nResultado: Empate!");
		break;
		case TESOURA:
		alert("O computador escolheu pedra."
			+"\nResultado: Você perdeu!");
		break;
	}

} else /*TESOURA*/ {

	switch(computador){
		case PEDRA:
		alert("O computador escolheu pedra."
			+"\nResultado: Você perdeu!");
		break;
		case PAPEL:
		alert("O computador escolheu papel."
			+"\nResultado: Você venceu!");
		break;
		case TESOURA:
		alert("O computador escolheu pedra."
			+"\nResultado: Empate!");
		break;
	}

}
