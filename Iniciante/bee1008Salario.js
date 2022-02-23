/**********************************************************************************************
*ID 1008
**
******************************** Desafio: Salário
*
*Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o 
*número e o salário do funcionário, com duas casas decimais.
*
********************************Entrada
*O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por 
*hora trabalhada, respectivamente.
*
********************************Saída
*Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em 
*branco após o $.
*
*Entrada:
**5
**6
**7
*Saída:
**NUMBER = 25
**SALARY = U$ 550.00
----------
*Entrada:
**0
**0
**7
*Saída:
**NUMBER = 1
**SALARY = U$ 4100.00
----------
*Entrada:
**5
**6
**-7
*Saída:
**NUMBER = 6
**SALARY = U$ 2254.75
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');


var numeroFuncionario = lines.shift();
var horasTrabalhadas = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = (horasTrabalhadas * valorHora).toFixed(2);

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario}`);
