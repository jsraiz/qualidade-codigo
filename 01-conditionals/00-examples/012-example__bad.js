/**
 * Aqui temos tanto a condicional quanto o loop e podemos 
 * eliminar ambos
 * 
 * Com funcionalidades que foram sendo adicionadas em versões
 * mais recentes da linguagem, podemos eliminar situações como essas,
 * tanto do loop quanto do for.
 * 
 * Esse script tem uma coleção de frutas (array de objetos com dados de frutas).
 * Nele, queremos executar um código se ao menos UMA
 * cor entre todas as frutas for vermelho (red)
 * 
 * TODO: Eliminar loop for e if, simplificando bastante o código
 * 
 * * Dica: olhar função some de array
 * 
 */
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test() {
  let isOneRed = false;

  for (let f of fruits) {
    if (f.color === 'red') {
      isOneRed = true;
      break;
    };
  }

  return isOneRed;
}

console.log(test());