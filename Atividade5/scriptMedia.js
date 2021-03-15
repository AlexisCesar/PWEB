alert("Vamos calcular a média de um aluno!");

var nome = prompt("Insira o nome do aluno:");

var nota1 = parseFloat(prompt("Insira a primeira nota de " + nome + ":"));
var nota2 = parseFloat(prompt("Insira a segunda nota de "  + nome + ":"));
var nota3 = parseFloat(prompt("Insira a terceira nota de " + nome + ":"));

var media = (nota1 + nota2 + nota3) / 3;

alert("A média do aluno " + nome + " é: " + media.toFixed(2));