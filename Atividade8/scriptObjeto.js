alert("Criando objetos!"
	+ "\n\nVerifique o código-fonte para ver"
	+ "\nas formas utilizadas."
	+ "\n\nNo final dos alerts, um print"
	+ "\ndo código será exibido.");

//Usando Construtor
function Aluno(nome, ra, curso){
	this.nome = nome;
	this.ra = ra;
	this.curso = curso;
}

var aluno = new Aluno("Alexis Cesar Ruiz de Almeida",
	"0030481921015",
	"ADS");

alert("Testando com construtor: "
	+ "\nNome: " + aluno.nome
	+ "\nRA: " + aluno.ra
	+ "\nCurso: " + aluno.curso);

//Sem Construtor
var aluno2 = {};
aluno2.nome = "Maria";
aluno2.ra = "0000000000001";
aluno2.curso = "Sistemas Biomédicos";

alert("Testando sem construtor: "
	+ "\nNome: " + aluno2.nome
	+ "\nRA: " + aluno2.ra
	+ "\nCurso: " + aluno2.curso);

//Forma Literal
var aluno3 = {
	nome: "Angelo",
	ra: "0000000000002",
	curso: "Manufatura Avançada"
};

alert("Testando forma literal: "
	+ "\nNome: " + aluno3.nome
	+ "\nRA: " + aluno3.ra
	+ "\nCurso: " + aluno3.curso);