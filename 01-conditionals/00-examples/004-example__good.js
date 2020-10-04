/**
 *
 * Aqui temos um clássico if else onde ficamos testando
 * o mesmo valor (variável people) e, de acordo com esse teste,
 * um valor é atribuído à variável price.
 * Ou seja, de acordo com o teste (condição em si), um valor
 * é atribuído a variável price
 * 
 * Esse tipo de condicional pode ficar gigante de forma muito fácil
 * 
 * A ideia é refatorar e deixar simples essas verificações
 * utilizando funções reutilizáveis
 * 
 * TODO: Eliminar condicionais
 * ? Esse script possui testes
 */

// export default function getDiscount(people) {
//   let price;
//   if (people < 10) {
//     price = 500;
//   } else if (people >= 10 && people < 25) {
//     price = 350;
//   } else if (people >= 25 && people < 100) {
//     price = 250;
//   } else if (people >= 100) {
//     price = 200;
//   }

//   return price;
// }

function between (v1, v2) {
  return function (value) {
    return value >= v1 && value < v2;
  }
}

export default function getDiscount(people) {
  const tests = [
    [value => value < 10, 500],
    [between(10, 25), 350],
    [between(25, 100), 250],
    [function(value) { return value >= 100; }, 200],
  ];

  const [ _, discount ] = tests.find(function([ test ]) {
    return test(people)
  });

  return discount;
}