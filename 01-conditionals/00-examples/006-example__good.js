/**
 * Veja que essa condicional tem um único objetivo:
 * atribuir um valor ou outro para a variável desconto
 * com base no valor do preço
 * 
 * Esse um clássico exemplo de refatoração para ternário
 * 
 * Sempre que for realizar uma atribuição com base em uma
 * expressão boleana, é sinal que pode aplicar o ternário
 * 
 * TODO: Substituir condicional por ternário
 * ! Não possui testes
 */


// let desconto;
// if (preco > 500) {
//     desconto = 0.15;
// } else {
//     desconto = 0.1
// }

const preco = 4000;

// * Forma correta:
// const desconto = (preco > 500) ? 0.15 : 0.1;
// console.log(desconto);

// ! Exemplo horrível com ninho de ternário (EVITE SEMPRE)!!
function getDiscount (preco) {
  return (preco > 500) ? 0.15 :
    ((preco > 200 && preco <= 350) ? 0.12 : 0.11)  
}

const desconto = getDiscount(preco);
console.log(desconto);