/*
===========================================================================================================================
  Desafio: 1012 - Esfera
  Autor: Eber Leocadio Pereira Junior
  GitHub: eber-leocadio
  Descrição: 
    Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

===========================================================================================================================
Exemplo de Entrada	| Exemplo de Saída
3.0 4.0 5.2         | TRIANGULO: 7.800
                    | CIRCULO: 84.949
                    | TRAPEZIO: 18.200
                    | QUADRADO: 16.000
                    | RETANGULO: 12.000
===========================================================================================================================
*/

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const [A, B, C] = lines.shift().split(' ').map(item => parseFloat(item));

console.log(`TRIANGULO: ${triangleArea(A, C).toFixed(3)}`);
console.log(`CIRCULO: ${circleArea(C).toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezoidArea(A, B, C).toFixed(3)}`);
console.log(`QUADRADO: ${squareArea(B).toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea(A, B).toFixed(3)}`);


function triangleArea(base, height) {
  return (base * height) / 2;
}

function circleArea(radius) {
  return pi * Math.pow(radius, 2);
}

function trapezoidArea(base1, base2, height) {
  return ((base1 + base2) * height) / 2;
}

function squareArea(side) {
  return Math.pow(side, 2);
}

function rectangleArea(side1, side2) {
  return side1 * side2;
}