/**********************************************************************************************
*ID 1010
**
******************************** Desafio: Cálculo Simples
*
*Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário 
*de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada 
*peça 2. Após, calcule e mostre o valor a ser pago.
*
********************************Entrada
*O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
*respectivamente dois inteiros e um valor com 2 casas decimais.
*
********************************Saída
*A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de 
*deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser 
*apresentado com 2 casas após o ponto.
*
*Entrada:
**12 1 5.30
**16 2 5.10
*Saída:
**VALOR A PAGAR: R$ 15.50
----------
*Entrada:
**13 2 15.30
**161 4 5.20
*Saída:
**VALOR A PAGAR: R$ 51.40
----------
*Entrada:
**1 1 15.10
**2 1 15.10
*Saída:
**VALOR A PAGAR: R$ 30.20
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');

var pecaUm = lines.shift().split(" ");
var pecaDois = lines.shift().split(" ");

var codigoPecaUm = pecaUm.shift();
var numeroPecaUm = pecaUm.shift();
var valorPecaUm = pecaUm.shift();

var totalPecaUm = (numeroPecaUm * valorPecaUm);

var codigoPecaDois = pecaDois.shift();
var numeroPecaDois = pecaDois.shift();
var valorPecaDois = pecaDois.shift();

var totalPecaDois = (numeroPecaDois * valorPecaDois);

var totalApagar = (totalPecaUm + totalPecaDois).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${totalApagar}`);