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
let desconto;
if (preco > 500) {
    desconto = 0.15;
} else {
    desconto = 0.1
}