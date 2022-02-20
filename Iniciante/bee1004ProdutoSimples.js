/**********************************************************************************************
*ID 1004
**
******************************** Desafio: Produto Simples
*
Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.  
*
********************************Entrada
*O arquivo de entrada contém 2 valores inteiros.
*
********************************Saída
*Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, 
*caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*
*Entrada:
**3
**9
*Saída:
**PROD = 27
----------
*Entrada:
**-30
**10
*Saída:
**PROD = -300
----------
*Entrada:
**0
**9
*Saída:
**PROD = 0
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); //modifiquei para fazer o teste direto no vscode antes de enviar para site da beecrowd
var lines = input.split('\n');

var intA = parseInt(lines.shift());
var intB = parseInt(lines.shift());

var produto = intA * intB;

console.log(`PROD = ${produto}`);