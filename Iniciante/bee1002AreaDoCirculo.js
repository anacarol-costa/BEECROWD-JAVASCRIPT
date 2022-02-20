/**********************************************************************************************
*ID 1002
**
******************************** Desafio: Área do Círculo
*
*A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
*
*- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
*
********************************Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.
*
********************************Saída
*Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os 
*problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*
*
*Entrada:
**2.00
*Saída:
**A=12.5664
----------
*Entrada:
**100.64
*Saída:
**A=31819.3103
----------
*Entrada:
**150.00
*Saída:
**A=70685.7750
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); //modifiquei para fazer o teste direto no vscode antes de enviar para site da beecrowd
var lines = input.split('\n');

var raio = parseFloat(lines);
var n = 3.14159;

var area = (n * Math.pow(raio, 2)).toFixed(4);


console.log(`A=${area}`);

