/**********************************************************************************************
*ID 1007
**
******************************** Desafio: Diferença
*
*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
*
********************************Entrada
*O arquivo de entrada contém 4 valores inteiros.
*
********************************Saída
*Imprima a mensagem "MEDIA" DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*
*Entrada:
**5
**6
**7
**8
*Saída:
**DIFERENCA = -26
----------
*Entrada:
**0
**0
**7
**8
*Saída:
**DIFERENCA = -56
----------
*Entrada:
**5
**6
**-7
**8
*Saída:
**DIFERENCA = 86
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');

var intA = lines.shift();
var intB = lines.shift();
var intC = lines.shift();
var intD = lines.shift();

var diferenca = (intA * intB) - (intC * intD);

console.log(`DIFERENCA = ${diferenca}`);