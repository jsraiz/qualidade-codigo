/**
 * 
 * Aqui vemos um exemplo clássico de purposeless condicional. 
 * A única diferença nesse exemplo é que temos dois if que, caso ambos sejam verdadeiro,
 * a expressão deve retornar true, caso contrário retorna false
 * 
 * TODO: Refatorar condicionais para uma única expressão booleana
*/

function employed(hasExperience, amountOfExperience) {
  if (hasExperience === true) {
    if(amountOfExperience > 5) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// TESTES

//* Deve ser false
console.log(employed(true, 4));

//* Deve ser false
console.log(employed(true, 5));

//* Deve ser true
console.log(employed(true, 6));

//* Deve ser false
console.log(employed(false, 6));

//* Deve ser false
console.log(employed(false, 1));