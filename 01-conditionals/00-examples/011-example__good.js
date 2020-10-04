/**
 * Aqui temos tanto a condicional quanto o loop e podemos 
 * eliminar ambos
 * 
 * Com funcionalidades que foram sendo adicionadas em versões
 * mais recentes da linguagem, podemos eliminar situações como essas,
 * tanto do loop quanto do for.
 * 
 * Esse script tem uma coleção de frutas (array de objetos com dados de frutas).
 * Nele, queremos executar um código apenas se todas
 * as cores de todas as frutas forem vermelho (red)
 * 
 * TODO: Eliminar loop for e if, simplificando bastante o código
 * 
 * * Dica: olhar função every de array
 * 
 */
const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "red" },
  { name: "grape", color: "purple" },
];

// function test() {
//   let isAllRed = true;

//   for (let f of fruits) {
//     if (!isAllRed) break;
//     isAllRed = f.color === "red";
//   }

//   return isAllRed;
// }

function test() {
  return fruits.every(function(fruit) {
    return fruit.color === 'red'
  })
};''


console.log(test())