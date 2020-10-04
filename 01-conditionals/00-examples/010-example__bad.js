/**
 * Uma forma de melhorar nossas condicionais são em casos
 * como esse, onde dentro da mesma condição, precisamos
 * comparar a mesma variável/constante/parâmetro com
 * vários valores
 * 
 * Um detalhe importante aqui é o || (OU). Isso significa
 * que se apenas UMA das expressões for verdadeira, toda
 * condição é verdadeira!
 * 
 * TODO: Simplificar condicional reduzindo a complexidade
 * TODO: das verificações
 */

if (fruit == 'apple' || fruit == 'strawberry') {
  console.log('red');
}