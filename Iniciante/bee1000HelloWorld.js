/**********************************************************************************************
*ID 1000
**
******************************** Desafio: Hello World!
*
*Bem-vindo ao beecrowd!
*
*O seu primeiro programa em qualquer linguagem de programação normalmente é o "Hello World!". Neste primeiro problema tudo o que você precisa fazer é imprimir esta mensagem na tela.
*
******************************** Entrada
*
*Este problema não possui nenhuma entrada.
*
******************************** Saída
*
*Você deve imprimir a mensagem "Hello World!" e em seguida o final de linha, conforme o exemplo abaixo.
*
*
*Entrada:
**
*Saída:
**Hello World!
*
**********************************************************************************************/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("Hello World!");