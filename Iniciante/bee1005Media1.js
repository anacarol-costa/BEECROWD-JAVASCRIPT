/**********************************************************************************************
*ID 1005
**
******************************** Desafio: Produto Simples
*
*Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B 
*tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
*
********************************Entrada
*O arquivo de entrada contém 2 valores com uma casa decimal cada um.
*
********************************Saída
*Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de 
*dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error"
*
*Entrada:
**5.0
**7.0
*Saída:
**MEDIA = 6.43182
----------
*Entrada:
**0.0
**7.1
*Saída:
**MEDIA = 4.84091
----------
*Entrada:
**10.0
**10.0
*Saída:
**MEDIA = 10.00000
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');

var notaAaluno = parseFloat(lines.shift());
var notaBaluno = parseFloat(lines.shift());

var media = ((notaAaluno * 3.5 + notaBaluno * 7.5)/11).toFixed(5);

console.log(`MEDIA = ${media}`);