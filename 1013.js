/*
===========================================================================================================================
  Desafio: 1013 - Consumo
  Autor: Eber Leocadio Pereira Junior
  GitHub: eber-leocadio
  Descrição: 
    Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
    Entrada
      O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.
    Saída
      Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

===========================================================================================================================
Exemplo de Entrada	| Exemplo de Saída
500                 | 14.286 km/l
35.0                | 
===========================================================================================================================
*/

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');


const X = lines.shift();
const Y = lines.shift();

console.log(`${(X / Y).toFixed(3)} km/l`);