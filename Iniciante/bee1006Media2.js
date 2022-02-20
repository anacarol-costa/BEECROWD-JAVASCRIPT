/**********************************************************************************************
*ID 1006
**
******************************** Desafio: Media 2
*
*Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C 
*tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal
*
********************************Entrada
*O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).
*
********************************Saída
*Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os 
*problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*
*Entrada:
**5.0
**7.0
*Saída:
**MEDIA = 6.3
----------
*Entrada:
**5.0
**10.0
**10.0
*Saída:
**MEDIA = 9.0
----------
*Entrada:
**10.0
**10.0
**5.0
*Saída:
**MEDIA = 7.5
*
**********************************************************************************************/

var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');

var notaAaluno = lines.shift();
var notaBaluno = lines.shift();
var notaCaluno = lines.shift();

var media = ((notaAaluno * 2 + notaBaluno * 3 + notaCaluno *5)/10).toFixed(1);

console.log(`MEDIA = ${media}`);
