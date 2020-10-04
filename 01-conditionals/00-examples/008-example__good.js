/**
 * 
 * Existem condicionais que podemos substituir por objetos.
 * 
 * Quando temos casos como esse, onde comparamos sempre a mesma variável/constante/parâmetro
 * em todos os casos e executamos um bloco, é um bom candidato a substituição
 * 
 * TODO: Substituir condicionais por objeto
 * ! Esse script não possui testes
 * 
 */
// function setAccType(accType) {
//   if (accType === "PLATINUM") {
//       return "Platinum Customer";
//   } else if (accType === "GOLD") {
//       return "Gold Customer";
//   } else if (accType === "SILVER") {
//       return "Silver Customer";
//   }
// }

const types = {
  PLATINUM: 'Platinum Customer',
  GOLD: 'Gold Customer',
  SILVER: 'Silver Customer',
};

function setAccType(accType) {
  return types[accType];
};

console.log(setAccType('SILVER'))