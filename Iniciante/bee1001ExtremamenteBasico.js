/**********************************************************************************************
*ID 1001
**
******************************** Desafio: Extremamente Básico
*
*Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente 
*mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*
******************************** Entrada
*A entrada contém 2 valores inteiros.
*
******************************** Saída
*Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo 
*abaixo.
*
*
*Entrada:
**10
**9
*Saída:
**X = 19
----------
*Entrada:
**-10
**4
*Saída:
**X = -6
----------
*Entrada:
**15
**-7
*Saída:
**X = 8
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); //modifiquei para fazer o teste direto no vscode antes de enviar para site da beecrowd
var lines = input.split('\n');

var letraA = parseFloat(lines[0]);
var letraB = parseFloat(lines[1]);

var soma = letraA + letraB;
console.log(`X = ${soma}`);