/**********************************************************************************************
*ID 1003
**
******************************** Desafio: Soma Simples
*
*Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.
*
********************************Entrada
*O arquivo de entrada contém 2 valores inteiros.
*
********************************Saída
*Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. 
*Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*
*
*Entrada:
**30
**10
*Saída:
**SOMA = 40
----------
*Entrada:
**-30
**10
*Saída:
**SOMA = -20
----------
*Entrada:
**0
**0
*Saída:
**SOMA = 0
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); //modifiquei para fazer o teste direto no vscode antes de enviar para site da beecrowd
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B;

console.log(`SOMA = ${soma}`);
